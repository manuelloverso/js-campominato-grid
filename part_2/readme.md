# Instructions

- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
  Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.

  ### Steps

  - Generare un array e riempirlo con 16 numeri randomici da 1 a 'numero di celle disponibili'

- In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati

  - abbiamo calpestato una fungo
  - la cella si colora di rosso e la partita termina.
    Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

    ### Steps

    - Verifico se il numero della cella cliccata è presente nell'array generato in precedenza
    - SE è vero cambio il background color ed l'inner html di tutte le celle corrispondenti ai numeri dell'array e termino la partita
    - ALTRIMENTI incremento un counter dedicato al numero di click effettuati

- La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).

### Steps

- SE il counter dello step precedente è uguale al 'numero di celle disponibili' - 16 la partita termina, il giocatore vince

- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.
