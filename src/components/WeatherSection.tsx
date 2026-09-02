import { getLocale, getTranslations } from 'next-intl/server';

type WeatherGlyphKey = 'sun' | 'partly' | 'cloudy' | 'rain' | 'snow' | 'storm';

const WMO_GROUPS: Record<WeatherGlyphKey, number[]> = {
  sun: [0],
  partly: [1, 2],
  cloudy: [3, 45, 48],
  rain: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  snow: [71, 73, 75, 77, 85, 86],
  storm: [95, 96, 99],
};

function glyphFor(code: number): WeatherGlyphKey {
  for (const [key, codes] of Object.entries(WMO_GROUPS)) {
    if (codes.includes(code)) return key as WeatherGlyphKey;
  }
  return 'cloudy';
}

const LOCALE_MAP: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en-GB',
  hr: 'hr-HR',
  de: 'de-DE',
};

const API_BASE = 'https://api.open-meteo.com/v1/forecast';

async function fetchWeather() {
  const params = new URLSearchParams({
    latitude: '45.8065479',
    longitude: '15.9786702',
    timezone: 'Europe/Zagreb',
    forecast_days: '5',
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
  });
  const res = await fetch(`${API_BASE}?${params.toString()}`, { next: { revalidate: 1800 } });
  if (!res.ok) throw new Error(`Open-Meteo HTTP ${res.status}`);
  return res.json();
}

function formatDay(dateStr: string, locale: string) {
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString(LOCALE_MAP[locale] || locale, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

function WeatherGlyph({ type, className }: { type: WeatherGlyphKey; className?: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };
  switch (type) {
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      );
    case 'partly':
      return (
        <svg {...common}>
          <circle cx="8" cy="9" r="4" />
          <line x1="8" y1="3" x2="8" y2="4" />
          <line x1="8" y1="14" x2="8" y2="15" />
          <line x1="2" y1="9" x2="3" y2="9" />
          <line x1="13" y1="9" x2="14" y2="9" />
          <line x1="3.5" y1="4.5" x2="4.3" y2="5.3" />
          <line x1="11.7" y1="12.7" x2="12.5" y2="13.5" />
          <path d="M17 18h-7a3.5 3.5 0 0 1 .8-6.9 4.5 4.5 0 0 1 8.6 1.2A2.7 2.7 0 0 1 17 18z" />
        </svg>
      );
    case 'cloudy':
      return (
        <svg {...common}>
          <path d="M17.5 19h-11a4 4 0 0 1-.7-7.9 5.5 5.5 0 0 1 10.6 1.1A3.2 3.2 0 0 1 17.5 19z" />
        </svg>
      );
    case 'rain':
      return (
        <svg {...common}>
          <path d="M17.5 15h-11a4 4 0 0 1-.7-7.9 5.5 5.5 0 0 1 10.6 1.1A3.2 3.2 0 0 1 17.5 15z" />
          <line x1="7" y1="19" x2="6" y2="21" />
          <line x1="12" y1="19" x2="11" y2="21" />
          <line x1="17" y1="19" x2="16" y2="21" />
        </svg>
      );
    case 'snow':
      return (
        <svg {...common}>
          <path d="M17.5 15h-11a4 4 0 0 1-.7-7.9 5.5 5.5 0 0 1 10.6 1.1A3.2 3.2 0 0 1 17.5 15z" />
          <line x1="7" y1="19" x2="7" y2="21" />
          <line x1="12" y1="19" x2="12" y2="21" />
          <line x1="17" y1="19" x2="17" y2="21" />
        </svg>
      );
    case 'storm':
      return (
        <svg {...common}>
          <path d="M17.5 15h-11a4 4 0 0 1-.7-7.9 5.5 5.5 0 0 1 10.6 1.1A3.2 3.2 0 0 1 17.5 15z" />
          <polyline points="11 15 9.5 19 13 19 11 22" />
        </svg>
      );
  }
}

export default async function WeatherSection() {
  const t = await getTranslations('weather');
  const tc = await getTranslations('weather.codes');
  const locale = await getLocale();

  let data: any = null;
  try {
    data = await fetchWeather();
  } catch {
    data = null;
  }

  return (
    <section id="weather" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        {!data ? (
          <div
            className="rounded-xl p-8 text-center"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{t('unavailableTitle')}</p>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>{t('unavailableText')}</p>
          </div>
        ) : (
          <>
            {/* Current conditions */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <WeatherGlyph type={glyphFor(data.current.weather_code)} className="w-14 h-14" />
                  <div>
                    <div className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      {Math.round(data.current.temperature_2m)}°C
                    </div>
                    <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {tc(String(data.current.weather_code))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                  <div>
                    <div style={{ color: 'var(--text-muted)' }}>{t('labels.feelsLike')}</div>
                    <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {Math.round(data.current.apparent_temperature)}°C
                    </div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-muted)' }}>{t('labels.humidity')}</div>
                    <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {data.current.relative_humidity_2m}%
                    </div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-muted)' }}>{t('labels.wind')}</div>
                    <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {Math.round(data.current.wind_speed_10m)} km/h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5-day forecast */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {data.daily.time.map((date: string, i: number) => (
                <div
                  key={date}
                  className="rounded-xl p-4 text-center"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
                >
                  <div className="text-sm font-medium mb-3" style={{ color: 'var(--text-muted)' }}>
                    {formatDay(date, locale)}
                  </div>
                  <WeatherGlyph type={glyphFor(data.daily.weather_code[i])} className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                    {tc(String(data.daily.weather_code[i]))}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {Math.round(data.daily.temperature_2m_max[i])}° / {Math.round(data.daily.temperature_2m_min[i])}°
                  </div>
                  {data.daily.precipitation_probability_max[i] != null && (
                    <div className="text-xs mt-2" style={{ color: 'var(--accent)' }}>
                      {t('labels.precipitation')} {data.daily.precipitation_probability_max[i]}%
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-6 text-xs text-center" style={{ color: 'var(--text-muted)' }}>
          {t('note')}{' '}
          <a
            href="https://open-meteo.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)' }}
          >
            Open-Meteo
          </a>
        </div>
      </div>
    </section>
  );
}
