# 💪 App Oplitia

App per la gestione della palestra con admin, personal trainer, utenti e tracking performance.

## 🚀 Features

- ✅ Autenticazione multi-utente
- ✅ Gestione ruoli (Admin → PT → Utente)
- ✅ Schede di allenamento personalizzabili
- ✅ Tracking performance e statistiche
- ✅ Dashboard admin
- ✅ Ricerca utenti

## 📋 Tech Stack

- **Frontend**: Next.js 14 + React + TypeScript
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js
- **Styling**: Tailwind CSS

## 🛠️ Setup

### 1. Clona il repository
```bash
git clone https://github.com/nardy18/app-oplitia.git
cd app-oplitia
```

### 2. Installa dipendenze
```bash
npm install
```

### 3. Configura il database
```bash
cp .env.example .env.local
# Modifica .env.local con i tuoi dati PostgreSQL
npm run db:push
```

### 4. Avvia il dev server
```bash
npm run dev
```

Accedi a [http://localhost:3000](http://localhost:3000)

## 📁 Struttura Progetto

```
app-oplitia/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── workouts/
│   │   └── stats/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── profile/
│   │   ├── workouts/
│   │   └── stats/
│   ├── admin/
│   │   ├── users/
│   │   ├── workouts/
│   │   └── trainers/
│   └── layout.tsx
├── components/
│   ├── auth/
│   ├── ui/
│   ├── dashboard/
│   └── admin/
├── lib/
│   ├── auth.ts
│   └── utils.ts
├── prisma/
│   └── schema.prisma
├── public/
└── styles/
```

## 🔐 Ruoli e Permessi

### Admin
- Gestire tutti gli utenti
- Creare/modificare schede di allenamento
- Assegnare PT agli utenti
- Visualizzare tutte le statistiche
- Ricerca utenti avanzata

### Personal Trainer (PT)
- Visualizzare utenti assegnati
- Creare/modificare schede personali
- Visualizzare statistiche utenti

### Utente
- Visualizzare propria scheda
- Aggiornare statistiche personali
- Vedere performance

## 📝 TODO

- [ ] Setup autenticazione NextAuth
- [ ] Pagine login/signup
- [ ] Dashboard utente
- [ ] Dashboard admin
- [ ] CRUD schede allenamento
- [ ] Sistema stats
- [ ] Ricerca utenti
- [ ] Gestione PT

## 👨‍💻 Sviluppo

Tutti i contributi sono benvenuti!

## 📞 Contatti

Creato da nardy18