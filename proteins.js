const API_URL = "http://localhost:8080/proteins";

function cargarProteina() {
    const proteinId = document.getElementById("proteinId").value;

    fetch(`http://localhost:8080/proteins/${proteinId}`)
        .then(r => r.json())
        .then(protein => {
            document.getElementById("viewFastaNombre").innerText = protein.fastaNombre;
            document.getElementById("viewFastaSecuencia").innerText = protein.fastaSecuencia;
            document.getElementById("viewFuente").innerText = protein.fuente;
            document.getElementById("viewOrganismo").innerText = protein.organismo;
            document.getElementById("viewClasificacion").innerText = protein.clasificacion;
            document.getElementById("viewEcClasificacion").innerText = protein.ecClasificacion;
            document.getElementById("viewAutores").innerText = protein.autores;
        });
}


function crearProteina() {
    const protein = {
        fastaNombre: document.getElementById("createFastaNombre").value,
        fastaSecuencia: document.getElementById("createFastaSecuencia").value,
        fuente: document.getElementById("createFuente").value,
        organismo: document.getElementById("createOrganismo").value,
        clasificacion: document.getElementById("createClasificacion").value,
        ecClasificacion: Number(document.getElementById("createEcClasificacion").value),
        autores: document.getElementById("createAutores").value
    };

    fetch("http://localhost:8080/proteins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(protein)
    })
        .then(r => r.json())
        .then(result => {
            document.getElementById("idCreado").innerText = result.id;
            document.getElementById("proteinId").value = result.id;
            alert("Proteína creada correctamente");
        });
}
