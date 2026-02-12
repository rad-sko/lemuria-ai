# Lemuria Content House

Strona firmowa Lemuria Content House – produkcja filmowa z wykorzystaniem AI.

## Struktura projektu

```
lemuria-ai/
├── index.html      # strona główna
├── css/
│   └── style.css   # style (animacje, grain, scrollbar, komponenty)
├── js/
│   └── main.js    # animacje przy scrollu, modal wideo, obsługa video triggers
├── README.md
└── .gitignore
```

## Uruchomienie lokalne

To statyczna strona HTML. Możesz:

1. **Otworzyć plik** – dwuklik `index.html` w przeglądarce (linki z `#` mogą wymagać serwera).
2. **Prosty serwer** (np. Python):
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Wejdź na: http://localhost:8000

## Wdrożenie na serwer / GitHub Pages

- **GitHub Pages**: w repozytorium: Settings → Pages → Source: Deploy from a branch → branch `main`, folder `/ (root)`.
- **Serwer (Apache/Nginx)**: skopiuj całą zawartość katalogu (wraz z `css/`, `js/`) do katalogu dokumentów (np. `public_html` lub `www`). Strona musi być serwowana z katalogu zawierającego `index.html`.

## Zależności zewnętrzne

- **Tailwind CSS** – CDN (`cdn.tailwindcss.com`)
- **Iconify** – ikony (`code.iconify.design`)
- **Google Fonts** – Inter, Poppins
- **Vimeo** – odtwarzacze wideo (embed)
- **Obrazy** – Supabase Storage (URL-e w HTML)

Wszystko działa bez instalacji; wystarczy hosting plików statycznych.

## Wprowadzone poprawki

- Wyciągnięte style do `css/style.css`, skrypty do `js/main.js`.
- Poprawione literówki w HTML: `pointer-events-none` (zamiast `popoppins-events-none`), `cursor-pointer`, „MOTION DESIGN”, nazwa „RESPIAktywni”.
- Link do telefonu: `tel:+48530236256`.
- Zachowana semantyka i dostępność (np. `aria-label` przy przycisku zamykania modala).

## Licencja

Zawartość i kod należą do Lemuria sp. z o.o.
