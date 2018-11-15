//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
///////////     Ellements a changer :     ////////////
///////////       -------------           ////////////
///////////    Dans chaque fonctions :    ////////////
///////////                               ////////////
///////////      URL a renseigner.        ////////////
///////////       -------------           ////////////
///////////      Dans les fonctions       ////////////
///////////    POST,PUT,posting,modif.    ////////////
///////////    modifier les arguments     ////////////
///////////     selont la table BDD       ////////////
///////////                               ////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


//verification de la compatibilité du navigateur.
function getXMLHttpRequest() {
    var xhr = null;

    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest
        }
    } else {
        alert("navigateur non supporter");
        return;
    }
    return xhr;
};

//request javascript.
function request(callback) {
    var xhr = null;

    if (xhr && xhr.readyState != 0) {
        xhr.abort() // annulation de la requête si deja en cours.
        console.log("abort");
    }
    //    envoie de la requête si elle et pas en cours. 
    xhr = getXMLHttpRequest();
    let url = 'ici'; //adresse url a renseigné 

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText);
        } else if (xhr.readyState < 4) {
            //en cours de chargement.
        }
        xhr.open("GET", url, true);
        xhr.send(null);
    };
};

//readData javascript (callback de la request).
function readData(sData) {
    if (sData.length > 0) {
        let traitement = JSON.parse(sData);
        //a coder la mise en forme de ma reception.
    } else {
        console.log("Is bad");
    }
};

//POST en javascript.
function POST(nom, prenom, email, identification) {
    let url = "ici"; //url a renseigné.
    if (identification.length <= 0) {
        identification = null;
    }
    var data = "nom=" + nom + "&prenom=" + prenom + "&email=" + email + "&id=" + identification;

    var xhr = new getXMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

//PUT en javascript.
function PUT(nom, prenom, email, identification) {
    let url = "ici" + identification; //url a renseigné.
    if (identification.length <= 0) {
        identification = null;
    }
    var data = "nom=" + nom + "&prenom=" + prenom + "&email=" + email;

    var xhr = new getXMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

//DELETE en javascript.
function DELETE(identification) {
    let url = "ici" + identification; //url a renseigné.
    var xhr = new getXMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("DELETE", url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(null);
};

//POST en JQUERY, identification optionel.
function posting(nom, prenom, email, identification) {
    if (identification.length <= 0) {
        identification = null;
    }
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "", //adresse url a renseigné 
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "nom": nom,
            "prenom": prenom,
            "email": email,
            "id": identification
        }
    }

    $.ajax(settings).done(function (response) {
        // 1 = ok, 0 = erreur.
        console.log(response);
    });
};

//PUT en JQUERY.
function modif(nom, prenom, email, identification) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "ici" + identification, //url a renseigné.
        "method": "PUT",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        "data": {
            "nom": nom,
            "prenom": prenom,
            "email": email
        }
    }

    $.ajax(settings).done(function (response) {
        // 1 = ok, 0 = erreur.
        console.log(response);
    });
};

//DELETE en JQUERY.
function effacer(identification) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "ici" + identification, //url a renseigné.
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }

    $.ajax(settings).done(function (response) {
        // 1 = ok, 0 = erreur.
        console.log(response);
    });
};
