# Carrozzeria Molinari

Sito statico in HTML e JavaScript, con utility Tailwind CSS 4 compilate localmente.

Aprire `index.html` nel browser per visualizzare il sito. Non serve un server.

## Sviluppo

```sh
npm ci
npm run build
```

`npm run dev` osserva le modifiche al markup e aggiorna automaticamente il CSS.
`npm run check` verifica la sintassi JavaScript.

## Stili

- `index.html`: utility Tailwind per layout, responsive, colori e stati.
- `tailwind.css`: importazione Tailwind, token di tema, breakpoint e animazione.
- `styles.css`: output generato da Tailwind; non modificare manualmente.
- `script.js`: menu mobile, nota privacy e modulo dimostrativo.

Dopo aver modificato le classi HTML, eseguire `npm run build` oppure lasciare attivo `npm run dev`.
Il CSS compilato e incluso nel progetto, senza dipendenza da un CDN Tailwind.
Fotografie e font richiedono una connessione Internet.

## Modulo

Il modulo e dimostrativo: valida i campi ma non invia o salva dati.
Per un utilizzo reale occorrono un servizio di invio e un'informativa privacy adeguata.