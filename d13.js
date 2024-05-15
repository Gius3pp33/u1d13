document.addEventListener("DOMContentLoaded", function () {
  // "DomContentLoaded" Assicura che lo script venga eseguito solo dopo che il DOM è stato completamente caricato.
  const taskInput = document.getElementById("taskInput"); // ottengo l'elemento input per l'inserimento del task
  const addTaskBtn = document.getElementById("addTaskBtn"); //qui ottengo il pulsante per aggiungere un task
  const taskList = document.getElementById("taskList"); //qui invece ottengo l'elemento <ul> per i visualizzare i task che verranno creati
  console.log(taskInput);
  console.log(addTaskBtn);
  console.log(taskList);

  function addTask(taskText) {
    // questa è la funzione per aggiungere un nuovo elemento  task alla lista
    const li = document.createElement("li"); // qui si crea l'elemento <li> per ogni task aggiunto dall'input
    li.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn"); //qui aggiungo la classe delete-btn per applicare uno stile al bottone
    deleteBtn.innerText = "Elimina"; // qui aggiungo il pulsante che ho chiamato "elimina" associato al task creato cioè al nuovo <li>
    deleteBtn.addEventListener("click", function () {
      li.remove(); // qui col remove premendo il pulsante cancella,si rimuoverà il contenuto dell'input
    }); // li.appendChild(deleteBtn)
    li.appendChild(deleteBtn); // questo è il metodo che aggiunge il pulsante 'elimina' come figlio dell'elemento <li>,
    // così il pulsante 'elimina' viene visualizzato come parte del task nella lista,così quando,
    li.addEventListener("click", function () {
      // si clicca 'elimina' l'intero task verrà rimosso.
      li.classList.toggle("completed"); // qui col toggle('completed') ho potuto inserire la linea orizzontale che attraversa il testo,tramite il click
    });

    taskList.appendChild(li); //così aggiungo l'elemento <li> cioè il nuovo task alla lista dei task cioe alla taskList
    taskInput.value = ""; //questo taskInput.value = '';  cancella il testo inserito dall'input del task dopo avre aggiunto il task alla lista
  }

  document
    .getElementById("taskForm")
    .addEventListener("submit", function (event) {
      //Aggiungo un event listener al form per gestire l'invio del nuovo task,quando il form viene inviato
      event.preventDefault(); // Impedisco di ricaricare la pagina

      const taskText = taskInput.value.trim(); // qui col trim() levo la possibilità di inviare spazi vuoti
      if (taskText !== "") {
        // qui controllo se il campo input non sia vuoto
        addTask(taskText); // se il campo non è vuoto,chiamo la funzione addTask per aggiungere il nuovo task alla lista
      }
    });

  addTaskBtn.addEventListener("click", function () {
    //qui aggiungo un eventListener anche al pulsante per aggiungere un task, con lo stesso comportamento del form.
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      // do la condizione per controllare se il testo dela task non sia vuoto,se non lo è mi aggiunge il nuovo task
      addTask(taskText);
    }
  });
});
