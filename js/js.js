// cel 0 = CodePkCepage
var TableRecupInfoAjouterVin = new Array();
// Table en 2d, par cel un tableau (2)
//cel x,0 == CodePkMets
//cel x,1 == CodePkNivAccordMets
var TableRecupInfoMets = new Array();
// Variable recuperation info pour utilisation de la function POSTEstEnStock
var CodePkVin, CodePkMillesime, CodePkContenance;
//Variable recuperation CodeDegustation & CodeInvites
var RecupCodeDegustation, RecupCodeInvite;

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

function ComboBoxCouleur(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/COULEUR/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.COULEUR.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.COULEUR.records[i][0] + ' "> ' + traitement.COULEUR.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }
    };

    request(readData);

};

function ComboBoxPays(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/PAYS/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.PAYS.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.PAYS.records[i][0] + ' "> ' + traitement.PAYS.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxAppellation(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/APPELLATION/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.APPELLATION.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.APPELLATION.records[i][0] + ' "> ' + traitement.APPELLATION.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxRegion(IdDeLemplacementAvecLeDiese, CodePkCategoriePays) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/REGION/';

    function request(callback) {

        var xhr = null;
        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();
    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.REGION.records).each(function (i) {
                    if (traitement.REGION.records[i][1] == CodePkCategoriePays) {
                        $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.REGION.records[i][0] + ' "> ' + traitement.REGION.records[i][2] + '</option>');
                    } else {}
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxContenance(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/CONTENANCE/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.CONTENANCE.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.CONTENANCE.records[i][0] + ' "> ' + traitement.CONTENANCE.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxMillesime(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/MILLESIME/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.MILLESIME.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.MILLESIME.records[i][0] + ' "> ' + traitement.MILLESIME.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxEmplacement(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/EMPLACEMENT/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.EMPLACEMENT.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.EMPLACEMENT.records[i][0] + ' "> ' + traitement.EMPLACEMENT.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxMets(IdDeLemplacementAvecLeDiese, IdDeLemplacementAvecLeDiesePourAfficheLienRecette) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/METS/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.METS.records).each(function (i) {
                    $("#METS").append('<option id="' + i + '" value=" ' + traitement.METS.records[i][0] + ' "> ' + traitement.METS.records[i][2] + '</option>');
                });
            })();
            (function () {
                $('#METS').change(function () {
                    $("#METS option:selected").each(function () {
                        let temp = $("#METS option:selected").attr("id");
                        $(IdDeLemplacementAvecLeDiesePourAfficheLienRecette).html('<a href="' + traitement.METS.records[temp][3] + '">La recette</a>');
                    });
                }).trigger("change");
            })();
        } else {
            console.log("Is bad");
        }
    };
    request(readData);
};

function CheckBoxCepages(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/CEPAGE/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(traitement.CEPAGE.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<input type="checkbox" name="cepage" value=" ' + traitement.CEPAGE.records[i][0] + ' "> ' + traitement.CEPAGE.records[i][1] + '     ');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function POSTVin(NomCuve, Appellation, Region, Couleur, Culture, Commentaire) {
    let Posturl = "http://fbrc.esy.es/afpa/Cave/api.php/VIN/";

    var data = "NOM_CUVEE=" + NomCuve + "&CODEAPPELLATION=" + Appellation + "&CODEREGION=" + Region + "&CODECOULEUR=" + Couleur + "&TYPE_DE_CULTURE=" + Culture + "&COMMENTAIRES=" + Commentaire;

    var xhr = new getXMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //code PK reponsse quand fiche vin cree, pour utiliser en lien a Region, Cepage, Accord.xt;
            RecupCodePkDeLaCreationDuVin(this.responseText);
        }
    });

    xhr.open("POST", Posturl);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

function RecupCodePkDeLaCreationDuVin(code) {
    $(TableRecupInfoAjouterVin[0]).each(function (i) {
        //envoie du ou des cepages
        POSTCepage(code, TableRecupInfoAjouterVin[0][i]);
        //envoie des mets 
        $(TableRecupInfoMets).each(function (i) {
            POSTsAccordAvec(TableRecupInfoMets[i][0], code, TableRecupInfoMets[i][1]);
        })
    });
};

function POSTCepage(CodeVin, CodeCepage) {
    let PosCepageUrl = "http://fbrc.esy.es/afpa/Cave/api.php/A_POUR_CEPAGE/";

    var data = "CODECEPAGE=" + CodeCepage + "&CODEVIN=" + CodeVin;

    var xhr = new getXMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {}
    });

    xhr.open("POST", PosCepageUrl);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

function POSTsAccordAvec(CodeMets, CodeVin, CodeAccord) {
    let Pos_S_ACCORDE_AVEC_Url = "http://fbrc.esy.es/afpa/Cave/api.php/S_ACCORDE_AVEC/";

    var data = "CODEMETS=" + CodeMets + "&CODEVIN=" + CodeVin + "&ID_NIVEAU_ACCORD=" + CodeAccord;

    var xhr = new getXMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {}
    });

    xhr.open("POST", Pos_S_ACCORDE_AVEC_Url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

function ComboBoxMets(IdDeLemplacementAvecLeDiese, IdDeLemplacementAvecLeDiesePourAfficheLienRecette, CodePkCategorieMets) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/METS/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.METS.records).each(function (i) {
                    if (traitement.METS.records[i][1] == CodePkCategorieMets) {
                        $("#METS").append('<option id="' + i + '" value=" ' + traitement.METS.records[i][0] + ' "> ' + traitement.METS.records[i][2] + '</option>');
                    } else {}
                });
            })();
            (function () {
                $('#METS').change(function () {
                    $("#METS option:selected").each(function () {
                        try {
                            let temp = $("#METS option:selected").attr("id");
                            $(IdDeLemplacementAvecLeDiesePourAfficheLienRecette).html('<a href="' + traitement.METS.records[temp][3] + '">La recette</a>');
                        } catch {}
                    });
                }).trigger("change");
            })();
        } else {
            console.log("Is bad");
        }
    };
    request(readData);
};

function ComboBoxCategorieMets(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/CATEGORIE_METS/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.CATEGORIE_METS.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.CATEGORIE_METS.records[i][0] + ' "> ' + traitement.CATEGORIE_METS.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }
    };

    request(readData);

};

function ComboBoxNivAccordMets(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/NIVEAU_ACCORD/';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<option value=null > veuillez s&eacute;lectionner un choix </option>');
                $(traitement.NIVEAU_ACCORD.records).each(function (i) {
                    $(IdDeLemplacementAvecLeDiese).append('<option value=" ' + traitement.NIVEAU_ACCORD.records[i][0] + ' "> ' + traitement.NIVEAU_ACCORD.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }
    };

    request(readData);

};

function POSTStock(CODE_EMPLACEMENT, STOCK, PRIX_UNITAIRE_ACHAT) {
    let PostStockurl = "http://fbrc.esy.es/afpa/Cave/api.php/STOCK/";

    var data = "CODE_EMPLACEMENT=" + CODE_EMPLACEMENT + "&STOCK=" + STOCK + "&PRIX_UNITAIRE_ACHAT=" + PRIX_UNITAIRE_ACHAT;

    var xhr = new getXMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //code PK reponsse quand fiche vin cree, pour utiliser en lien a Region, Cepage, Accord.xt;
            POSTEstEnStock(this.responseText);
        }
    });

    xhr.open("POST", PostStockurl);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

function POSTEstEnStock(CODESTOCK) {
    let PostEstEnStockurl = "http://fbrc.esy.es/afpa/Cave/api.php/EST_EN_STOCK/";

    var data = "CODESTOCK=" + CODESTOCK + "&CODEVIN=" + CodePkVin + "&CODEMILLESIME=" + CodePkMillesime + "&CODECONTENANCE=" + CodePkContenance;
    var xhr = new getXMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //            code PK reponsse quand fiche vin cree, pour utiliser en lien a Region, Cepage, Accord.xt;
            //            console.log("Post du stock" + this.responseText);
        }
    });

    xhr.open("POST", PostEstEnStockurl);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

function Envoie(IdDeLemplacementAvecLeDiese, Funct_ionAexecute) {
    $(IdDeLemplacementAvecLeDiese).empty();
    $(IdDeLemplacementAvecLeDiese).append('<span class="MiseEnForm" > <div class="MiseEnForm"> Requ&ecirc;te enregistr&eacute;e <br/><button id="Reload">Retour</button></div></span>');
    $("#Reload").click(function () {
        Funct_ionAexecute();
    });
};

function POSTInvites(NOM, PRENOM, ADRESSEMAIL) {
    let PostInvitesurl = "http://fbrc.esy.es/afpa/Cave/api.php/INVITES/";

    var data = "NOM=" + NOM + "&PRENOM=" + PRENOM + "&ADRESSEMAIL=" + ADRESSEMAIL;

    var xhr = new getXMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //code PK reponsse quand fiche vin cree, pour utiliser en lien a Region, Cepage, Accord.xt;
            RecupCodeInvite = this.responseText;

        }
    });

    xhr.open("POST", PostInvitesurl);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

function POSTDegustation(CODESTOCK, DATE, QUANTITE) {
    let PostInvitesurl = "http://fbrc.esy.es/afpa/Cave/api.php/DEGUSTATION/";

    var data = "CODESTOCK=" + CODESTOCK + "&DATE=" + DATE + "&QUANTITE=" + QUANTITE;

    var xhr = new getXMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //code PK reponsse quand fiche vin cree, pour utiliser en lien a Region, Cepage, Accord.xt;
            RecupCodeDegustation = (this.responseText);
        }
    });

    xhr.open("POST", PostInvitesurl);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

function PUTStock(CODESTOCK, STOCK) {
    let PutStockurl = "http://fbrc.esy.es/afpa/Cave/api.php/STOCK/" + CODESTOCK;
    var data = "STOCK=" + STOCK;

    var xhr = new getXMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //            console.log(this.responseText);
        }
    });

    xhr.open("PUT", PutStockurl);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

function POSTA_Degustation(CODEDEGUSTATION, CODEINVITE, COMMENTAIRE) {
    let PostInvitesurl = "http://fbrc.esy.es/afpa/Cave/api.php/A_DEGUSTE/";

    var data = "CODEDEGUSTATION=" + CODEDEGUSTATION + "&CODEINVITE=" + CODEINVITE + "&COMMENTAIRE=" + COMMENTAIRE;

    var xhr = new getXMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //code PK reponsse quand fiche vin cree, pour utiliser en lien a Region, Cepage, Accord.xt;
            //            console.log(this.responseText);
        }
    });

    xhr.open("POST", PostInvitesurl);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);

};

//////////////////////////////////////////// CAVE ///////////////////////////////////////

function GetCave(callback) {
    var data = "undefined=";

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            callback(this.responseText);
        }
    });

    xhr.open("GET", "http://fbrc.esy.es/afpa/Cave/api.php/VIN?include=EST_EN_STOCK,CONTENANCE,REGION,COULEUR,MILLESIME,STOCK,EMPLACEMENT,PAYS,A_POUR_CEPAGE,INVITES,CEPAGE?transfomr=1");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);
};

function CbCave(sData) {
    if (sData.length > 0) {
        let traitement = JSON.parse(sData);
        $("#ContenairPrincipal").empty();
        $("#ContenairPrincipal").append('<table  id="sourcetable"><tbody id="AfficheVin" class="container"></tbody></table>');
        $("#AfficheVin").append('<tr class="row" ><td class="col-xs-3 col-sm-3 col-md-3 col-lg-3 " > Nom du Vin </td><td class="col-xs-1 col-sm-1 col-md-1 col-lg-1 " > Type de Vin </td><td class="col-xs-3 col-sm-3 col-md-3 col-lg-3 " > Region </td><td class="col" > Millesime </td><td class="col" > Contenance </td><td class="col-xs-1 col-sm-1 col-md-1 col-lg-1 " > Stock </td><td class="col-xs-1 col-sm-1 col-md-1 col-lg-1 " > Prix </td></tr>');
        $("#AfficheVin").css('color', 'white');
        $(traitement.VIN.records).each(function (i) {
            let ValidationAffichageBool = false;
            var CouleurVinAffichage = " ";
            (function AfficheCouleur() {
                $(traitement.COULEUR.records).each(function (ii) {
                    if (traitement.COULEUR.records[ii][0] == traitement.VIN.records[i][4]) {
                        CouleurVinAffichage = traitement.COULEUR.records[ii][1];
                    }
                })
            })();
            var RegionVinAffichage = " ";
            var PayVinAffichage = " ";
            (function AfficheRegionPays() {
                $(traitement.REGION.records).each(function (ii) {
                    if (traitement.REGION.records[ii][0] == traitement.VIN.records[i][3]) {
                        RegionVinAffichage = traitement.REGION.records[ii][2];

                        $(traitement.PAYS.records).each(function (iii) {
                            try {
                                if (traitement.PAYS.records[iii][0] == traitement.REGION.records[ii][1]) {
                                    PayVinAffichage = traitement.PAYS.records[ii][1];
                                }
                            } catch {}

                        })
                    }
                })
            })();
            var MillesimeAffichage = " ",
                PrixAffichage = " ",
                ContenanceAffichage = " ",
                NbStockAffichage = " ",
                StockAffichage = " ",
                EmplacementAffichage = " ",
                CodePkStockPourDegustation = " ";
            (function AfficheStocks() {
                $(traitement.EST_EN_STOCK.records).each(function (ii) {
                    try {
                        if (traitement.EST_EN_STOCK.records[ii][0] === traitement.VIN.records[i][0]) {
                            $(traitement.MILLESIME.records).each(function (iii) {
                                if (traitement.EST_EN_STOCK.records[ii][2] === traitement.MILLESIME.records[iii][0]) {
                                    MillesimeAffichage = traitement.MILLESIME.records[iii][1];
                                }
                            });
                            $(traitement.CONTENANCE.records).each(function (iiii) {
                                try {
                                    if (traitement.CONTENANCE.records[iiii][0] === traitement.EST_EN_STOCK.records[ii][3]) {
                                        ContenanceAffichage = traitement.CONTENANCE.records[iiii][1] + 'L';
                                    }
                                } catch {}
                            });
                            $(traitement.STOCK.records).each(function (iiiii) {
                                try {
                                    if (traitement.STOCK.records[iiiii][0] === traitement.EST_EN_STOCK.records[ii][1]) {
                                        NbStockAffichage = traitement.STOCK.records[iiiii][2];
                                        CodePkStockPourDegustation = traitement.STOCK.records[iiiii][0];
                                        if (NbStockAffichage >= 1) {
                                            ValidationAffichageBool = true;
                                        }
                                        PrixAffichage = traitement.STOCK.records[iiiii][3];

                                        $(traitement.EMPLACEMENT.records).each(function (iiiiii) {
                                            try {
                                                if (traitement.EMPLACEMENT.records[iiiiii][0] === traitement.STOCK.records[iiiii][1]) {
                                                    EmplacementAffichage = traitement.EMPLACEMENT.records[iiiiii][1];

                                                }
                                            } catch {}
                                        });
                                    }
                                } catch {}
                            });
                        }
                    } catch {}
                })
            })();
            if (ValidationAffichageBool) {
                $("#AfficheVin").append('<tr class="row"  id="Ligne' + i + '" ><td class="col-xs-3 col-sm-3 col-md-3 col-lg-3 " >' + traitement.VIN.records[i][1] + '</td><td class="col-xs-1 col-sm-1 col-md-1 col-lg-1 " >' + CouleurVinAffichage + '</td><td class="col-xs-3 col-sm-3 col-md-3 col-lg-3 " >' + RegionVinAffichage + '</td><td class="col" >' + MillesimeAffichage + '</td><td class="col" >' + ContenanceAffichage + '</td><td class="col-xs-1 col-sm-1 col-md-1 col-lg-1 " >' + NbStockAffichage + '/&cup;</td><td class="col-xs-1 col-sm-1 col-md-1 col-lg-1 " >' + PrixAffichage + '&#8364;</td></tr>');

                $('#Ligne' + i).after('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="Ligne' + i + 'Tg"><button RNSB="' + NbStockAffichage + '"  CPSPD="' + CodePkStockPourDegustation + '"  class="Degustation">Dégustation</button>Emplacement de la bouteil : ' + EmplacementAffichage + '<div></div>Pays d&apos;origine : ' + PayVinAffichage + '</div>');
                $('#Ligne' + i + 'Tg').hide();
                $('#Ligne' + i + 'Tg').css('width', '100%');
            };
        })
        //event click sur ligne & affichage dropdown
        var pickedup, RecupIdLigneSelect, Cpsdp, Rnsb, RnsbDeux;
        (function () {
            $("#sourcetable tbody tr").on("click", function (event) {

                // get back to where it was before if it was selected :
                if (pickedup != null) {
                    pickedup.css("background-color", "rgba(166, 172, 175, 0.3)");
                }
                $(this).css("background-color", "red");
                RecupIdLigneSelect = "#" + $(this).attr('id');
                $(RecupIdLigneSelect + 'Tg').toggle();
                pickedup = $(this);
            });
        })();
        //event click sur boutton dégustation ouvrant sur un menus 
        $(".Degustation").click(function () {
            $("#ContenairPrincipal").empty();
            Cpsdp = $(this).attr('CPSPD');
            Rnsb = $(this).attr('RNSB');
            RnsbDeux = Rnsb;
            $('#ContenairPrincipal').append('<span class="MiseEnForm" >Date de Degustation : <input type="date"  id="DateDeDegustation" name="DateDeDegustation"></input></span>');
            $('#ContenairPrincipal').append('<span class="MiseEnForm" >Quantit&eacute;  : <input type="number"  id="NouvStock" name="NouvStock"></input></span>');
            $('#ContenairPrincipal').append('<span class="MiseEnForm" ><button id="EnvoieDegustation"> Enregistrer Degustation </button</span>');

            $("#EnvoieDegustation").click(function () {
                let EnvoieQttNegative = RnsbDeux - $("#NouvStock").val();
                if (EnvoieQttNegative >= 0) {
                    POSTDegustation(Cpsdp, $("#DateDeDegustation").val(), $("#NouvStock").val());
                    PUTStock(Cpsdp, EnvoieQttNegative);
                    (function () {
                        function InviteListeDesVin(traitement) {
                            $("#ContenairPrincipal").empty();
                            $('#ContenairPrincipal').append('<span class="MiseEnForm" ><button id="NouvInvites"> Ajouter un Invites dans la liste</button</span>');


                            $("#ContenairPrincipal").append('<table  id="Sourcetable"><tbody id="AfficheInvites" class="container"></tbody></table>');
                            $("#ContenairPrincipal").append('<div class"MiseEnForm" id="AffichageListeInvite" ></div>');
                            $("#ContenairPrincipal").append('<div class"MiseEnForm" id="BTNa_post" ><button id="EnregistreListe" > Enregistre</button></div>');
                            $("#AfficheInvites").css('color', 'white');
                            $("#AffichageListeInvite").css('color', 'white');
                            $(traitement.INVITES.records).each(function (t) {
                                $('#AfficheInvites').append('<tr class="row" CodeT="' + t + '" CodeInvite="' + traitement.INVITES.records[t][0] + '" id="Ligne' + t + '" ><td class="col-xs-3 col-sm-3 col-md-3 col-lg-3" >' + traitement.INVITES.records[t][1] + '</td><td class="col-xs-3 col-sm-3 col-md-3 col-lg-3 " >' + traitement.INVITES.records[t][2] + '</td><td class="col-xs-3 col-sm-3 col-md-3 col-lg-3 " >' + traitement.INVITES.records[t][3] + '</td></tr>');
                            })

                            var Pickedup, CI, CT;
                            $("#Sourcetable tbody tr").on('click', function (event) {
                                CI = $(this).attr('CodeInvite');
                                CT = $(this).attr('CodeT');
                                if (this) {
                                    $("#AffichageListeInvite").append('<div><span>Nom : ' + traitement.INVITES.records[CT][1] + '</span><span>Prenom : ' + traitement.INVITES.records[CT][2] + '</span><span>Email : ' + traitement.INVITES.records[CT][2] + '</span><span> Commentaire de invites : <input type"text" Ci="' + CI + '" class="A_Post" ></input></span></div>');
                                    $(this).empty();
                                }
                            })

                            $("#EnregistreListe").click(function () {
                                $('.A_Post').each(function () {
                                    let CODEi = $(this).attr('Ci')
                                    let VALinput = $(this).val()

                                    POSTA_Degustation(RecupCodeDegustation, CODEi, VALinput);
                                    
                                    GetCave(CbCave);
                                });
                            });

                            $('#NouvInvites').click(function () {
                                $("#NouvInvites").hide();
                                $('#NewInvites').show();
                                $('#ContenairPrincipal').append('<div id="NewInvites" class="MiseEnForm"></div>');
                                $('#NewInvites').append('<span class="MiseEnForm" >Nom  : <input type="text"  id="NomInvites" name="NomInvites"></input></span>');
                                $('#NewInvites').append('<span class="MiseEnForm" >Prenom  : <input type="text"  id="PrenomInvites" name="PrenomInvites"></input></span>');
                                $('#NewInvites').append('<span class="MiseEnForm" >Adresse Mail  : <input type="email"  id="EmailInvites" name="EmailInvites"></input></span>');
                                $('#NewInvites').append('<span class="MiseEnForm" ><button id="EnvoieInvites"> Enregistrer invites </button</span>');

                                $("#EnvoieInvites").click(function () {
                                    $("#NouvInvites").show();

                                    if ($("#NomInvites").val().length >= 1 || $("#PrenomInvites").val().length >= 1 || $("#EmailInvites").val().length >= 1) {
                                        POSTInvites($("#NomInvites").val(), $("#PrenomInvites").val(), $("#EmailInvites").val());
                                        GetCaveRefresh();
                                    } else {
                                        console.log('pas send');
                                    }
                                });
                            });
                        };
                        InviteListeDesVin(traitement)

                        function GetCaveRefresh() {
                            var data = "undefined=";

                            var xhr = new XMLHttpRequest();

                            xhr.addEventListener("readystatechange", function () {
                                if (this.readyState === 4) {
                                    InviteListeDesVin(JSON.parse(this.responseText))
                                }
                            });

                            xhr.open("GET", "http://fbrc.esy.es/afpa/Cave/api.php/VIN?include=EST_EN_STOCK,CONTENANCE,REGION,COULEUR,MILLESIME,STOCK,EMPLACEMENT,PAYS,A_POUR_CEPAGE,INVITES,CEPAGE?transfomr=1");
                            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                            xhr.send(data);
                        };
                    })()
                } else {
                    console.log("impossible d'envoie une qqt negative!");
                }
            });
        });
    };
}
/////// La Cave //////////
$("#btnCaveNavbar").click(function () {
    GetCave(CbCave);
});

/////////////////////////////////////  FIN CAVE  /////////////////////////////////////////


/////// AJOUTER UN VIN //////////
function AjouterUnVin() {
    //initialisation de la div principal 
    $("#ContenairPrincipal").empty();
    $("#ContenairPrincipal").append('<div class="row MiseEnForm"  ><h3>Ajouter un Vin</h3></div>');
    // Nom de la cuvee //
    $('#ContenairPrincipal').append('<div class="row MiseEnForm"  ><span class="MiseEnForm" >Nom de la cuv&eacute;e : <input type="text"  id="nomcuve" name="nomcuve"></input></span></div>');
    //Combobox Couleur 
    $('#ContenairPrincipal').append('<div class="row MiseEnForm"><span class="MiseEnForm" >Type de vin : <select  id="couleur" name="couleur"></select></span></div>');
    ComboBoxCouleur('#couleur');
    //Combobox Appellation
    $('#ContenairPrincipal').append('<div class="row MiseEnForm"><span class="MiseEnForm" >Appellation : <select id="APPELLATION" name="APPELLATION"></select></span></div>');
    ComboBoxAppellation('#APPELLATION');
    //Combobox Pays
    $('#ContenairPrincipal').append('<div class="row MiseEnForm"><span class="MiseEnForm" >Pays : <select id="pays" name="pays"></select></span></div>');
    ComboBoxPays('#pays');
    // fonction pour lister les regions du pays select*
    (function () {
        $('#pays').change(function () {
            $("#pays option:selected").each(function () {
                if ($("#pays option:selected").attr("value") != null) {}
                $('.HRegion').show();
                try {
                    let temp = $("#pays option:selected").attr("id");
                    $("#region").empty();
                    ComboBoxRegion('#region', $("#pays option:selected").attr("value"));
                } catch {}
            });
            // declencheur quand statut change
        }).trigger("change");
    })();
    //Combobox Region
    $('#ContenairPrincipal').append('<div class="row MiseEnForm"><span class="MiseEnForm HRegion" >Region : <select class="HRegion" id="region" name="region"></select></span></div>');
    $('.HRegion').hide();
    //type de culture
    $('#ContenairPrincipal').append('<div class="row MiseEnForm"><span class="MiseEnForm" >Type de culture : <input id="Type_de_culture" name="Type_de_culture"></input></span></div>');
    //checkbox Cepage
    $('#ContenairPrincipal').append('<div class="row MiseEnForm"><span class="MiseEnForm" ><fieldset><span id="Cepage"></span></fieldset></span></div>');
    CheckBoxCepages('#Cepage');

    $('#ContenairPrincipal').append('<div class="row MiseEnForm"><span class="MiseEnForm"><button id="EnregistrerDesMets" > Afficher les mets</button></span></div>');
    $('#ContenairPrincipal').append('<div class="row MiseEnForm"><div id="ContenairMets"></div></div>');

    //liste des mets enregistrer       
    $('#ContenairPrincipal').append('<div class="row MiseEnForm"><div class="container" id="AffichageListeMetsQuandEnregistrer" ></div></div>');
    // commentaire
    $('#ContenairPrincipal').append('<div class="row MiseEnForm"><span class="MiseEnForm" >Commentaire : <input type="text" id="commentaire" name="commentaire"></input></span></div>');

    //Evenement clic sur btn mets
    $("#EnregistrerDesMets").click(function () {
        $('#EnregistrerDesMets').hide();
        //Categorie de mets
        $('#ContenairMets').append('<span class="MiseEnForm" >Categorie de Mets : <select id="CategorieMets" name="CategorieMets"></select></span>');
        ComboBoxCategorieMets('#CategorieMets');
        $('#ContenairMets').append('<span class="MiseEnForm HMETS" >Recettes : <select  id="METS" name="METS"></select><span id="afficheMets"></span></span>');
        $('.HMETS').hide();
        //affichage combobox recettes en fonctions de la categorie
        (function () {
            $('#CategorieMets').change(function () {
                $("#CategorieMets option:selected").each(function () {
                    if ($("#CategorieMets option:selected").attr("value") != null) {
                        $('.HMETS').show();
                    }
                    try {
                        let temp = $("#CategorieMets option:selected").attr("id");
                        $("#METS").empty();
                        ComboBoxMets('#METS', '#afficheMets', $("#CategorieMets option:selected").attr("value"));
                    } catch {}
                });
            }).trigger("change");
        })();
        //Combobox niv accord des mets / vin
        $('#ContenairMets').append('<span class="MiseEnForm" >Niv accord : <select id="NivAccordMets" name="NivAccordMets"></select></span>');
        ComboBoxNivAccordMets('#NivAccordMets');

        //bouton Enregistrer Mets & annuler
        $('#ContenairMets').append('<span class="MiseEnForm"><button id="EnregistreMets" > Enregistrer Mets </button><button id="btnAnnule"> Annuler </button></span>');

        //event click sur btnAnnule qui reset le formulaire
        $("#btnAnnule").click(function () {
            // reaffichage du bouton enregistrer mets puis vide la zone
            $('#EnregistrerDesMets').show();
            $('#ContenairMets').empty();
        });

        //event click sur le bouton ajouter Mets pour enregistrer la saisi avec verification.
        $("#EnregistreMets").click(function (e) {

            //verification pour enregistrer 
            if ($("#CategorieMets option:selected").attr("value") != 'null' && $("#METS option:selected").attr("value") != 'null' && $("#NivAccordMets option:selected").attr("value") != 'null') {

                let CodePkMets = $("#METS option:selected").attr("value");
                let CodePkNivAccordMets = $("#NivAccordMets option:selected").attr("value");
                let TableJointD = new Array();
                TableJointD.push($("#METS option:selected").attr("value"), $("#NivAccordMets option:selected").attr("value"));
                TableRecupInfoMets.push(TableJointD);

                $('#AffichageListeMetsQuandEnregistrer').append('<tr class="row" ><td class="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">' + $("#CategorieMets option:selected").html() + '</td><td class="col-xs-4 col-sm-4 col-md-4 col-lg-4" >' + $("#METS option:selected").html() + '</td><td class="col-xs-4 col-sm-4 col-md-4 col-lg-4" >' + $("#NivAccordMets option:selected").html() + '</td></tr>');

                // reaffichage du bouton enregistrer mets puis vide la zone
                $('#EnregistrerDesMets').show();
                $('#ContenairMets').empty();
            } else {
                e.preventDefault();
                console.log('Information mets non valid');
            }
        });
    });

    //bouton valider (qui verifira si toutes les zone on bien une doné) qui fera un post
    $("#ContenairPrincipal").append('<div class="row MiseEnForm"><span class="MiseEnForm"><button id="btnEnregistreVin" >Enregistrer le Vin</button></span></div>');

    $("#btnEnregistreVin").click(function (e) {
        let Nom_Cuve = $("#nomcuve").val();
        let CodePkAppellation = $("#APPELLATION option:selected").attr("value");
        let CodePkRegion = $("#region option:selected").attr("value");
        let CodePkCouleur = $("#couleur option:selected").attr("value");
        let Type_De_Culture = $("#Type_de_culture").val();
        let Commentaire = $("#commentaire").val();

        //         callback de la creation de la fiche fin pour recup le code pk qui permet d'envoyer par un deuxiem post les information complémentaires.
        //         (A POUR CEPAGE, S'ACCORD AVEC...)

        let CodePkCepage = [];
        $("input[type='checkbox']:checked").each(function (i) {
            CodePkCepage[i] = ($(this).attr('value'));
        });
        TableRecupInfoAjouterVin[0] = CodePkCepage;

        if (Nom_Cuve == 'null' || CodePkAppellation == 'null' || CodePkRegion == 'null' || CodePkCouleur == 'null' || Type_De_Culture.length <= 0 || CodePkCepage.length <= 0) {
            console.log("Pas d'envoie");
            e.preventDefault();
        } else {
            POSTVin(Nom_Cuve, CodePkAppellation, CodePkRegion, CodePkCouleur, Type_De_Culture, Commentaire);
            Envoie('#ContenairPrincipal', AjouterUnVin);
        }
    });
};
$("#btnAjouterVin").click(function () {
    AjouterUnVin();
});

/////// AJOUTER UN VIN EN STOCK //////////
function AjouterUnVinEnStock() {
    $("#ContenairPrincipal").empty();

    /////////////////////////// CODE VIN PROVISOIR EN ATT LISTE VIN POUR RECUP CODEVIN /////////////////////////////
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Code Du Vin : <input type="number"  id="CodeDuVin" name="CodeDuVin"></input></span>');
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //dropbox millesime
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Millesime : <select type="text"  id="millesime" name="millesime"></select></span>');
    ComboBoxMillesime('#millesime');
    // zone de saisie du nombres de bouteilles 
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Nb Btls : <input type="number"  id="NombreBout" name="NombreBout"></input></span>');
    // zone de saisie du prix unitaire
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Prix / U : <input type="number"  id="PrixUnitaire" name="PrixUnitaire"></input></span>');
    //dropbox Contenance
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Contenance : <select type="text"  id="Contenance" name="Contenance"></select></span>');
    ComboBoxContenance('#Contenance');
    //dropbox Emplacement
    $('#ContenairPrincipal').append('<span class="MiseEnForm" >Emplacement : <select type="text"  id="Emplacement" name="Emplacement"></select></span>');
    ComboBoxEmplacement('#Emplacement');

    //bouton Enregistrer
    $('#ContenairPrincipal').append('<span class="MiseEnForm"><button id="EnregistreStock" > Enregistrer </button></span>');

    //event click sur btn Enregistrer pour POST et verification
    $('#EnregistreStock').click(function (e) {

        if ($("#Emplacement option:selected").attr("value") == "null" || $("#NombreBout").val().length <= 0 || $("#PrixUnitaire").val() <= 0 || $("#CodeDuVin").val().length <= 0 || $("#millesime option:selected").attr("value") == "null" || $("#Contenance option:selected").attr("value") == "null") {
            e.preventDefault();
            console.log("Pas remplis");
        } else {
            CodePkVin = $("#CodeDuVin").val();
            CodePkMillesime = $("#millesime option:selected").attr("value");
            CodePkContenance = $("#Contenance option:selected").attr("value");

            // table STOCK 
            let CodePkEmplacement = $("#Emplacement option:selected").attr("value");
            let ValNbBtls = $("#NombreBout").val();
            let ValPrixUnitaire = $("#PrixUnitaire").val();

            POSTStock(CodePkEmplacement, ValNbBtls, ValPrixUnitaire);
            Envoie('#ContenairPrincipal', AjouterUnVinEnStock);
        }
    });
};
$('#btnAjouterStock').click(function () {
    AjouterUnVinEnStock();
});

        
        
        //partie Vinothèque
        
        
        $('#boutonVinotheque').click(function () {
    recupererListeDesVins('#ContenairPrincipal');
});

//
//
//Mise en place de la barre de recherche
//
//


function mettreLaBarreDeRecherche(emplacementBarreDeRecherche){
    $(emplacementBarreDeRecherche).prepend('<div id = "zoneDesBarresDeRecherche" class="container"></div>');

    $('#zoneDesBarresDeRecherche').prepend('<div id="barreDeRecherche2"></div>');
$('#barreDeRecherche2').append('<input type="text" class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-lg-offset-1" id="leChampDeRecherche2" onkeyup="fonctionRechercheAvancee()" placeholder="Filtre mets en accord, cépages..."></br></br>');
    $('#zoneDesBarresDeRecherche').prepend('<div id="barreDeRecherche1"></div>');
$('#barreDeRecherche1').append('<input type="text" class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-lg-offset-1" id="leChampDeRecherche1" onkeyup="fonctionRechercheAvancee()" placeholder="Filtre cuvée, type, région..."></br></br>');
};

function fonctionRechercheAvancee(){
    let filtre1 = $('#leChampDeRecherche1').val().toUpperCase();
    let filtre2 = $('#leChampDeRecherche2').val().toUpperCase();
    for (let i = 0 ; i<=($('#tableauPrincipal>div').length); i++){
     if((($('#infosLigne'+i).html().toUpperCase().indexOf(filtre2))> -1)&&($('#ligne'+i).html().toUpperCase().indexOf(filtre1)) > -1){
        $('#ligne'+i).show();

     } else{
         $('#ligne'+i).hide();
         $('#infosLigne'+i).hide();
     };  
    };
};


//
//
//Appel AJAX et gros du programme
//
//
function recupererListeDesVins(IdDeLemplacementAvecLeDiese) {


    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/VIN?include=COULEUR,REGION,PAYS,NOM_CUVEE,A_POUR_CEPAGE,CEPAGE,METS&transform=1';

    function request(callback) {

        var xhr = null;

        xhr = getXMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                callback(this.responseText);
            }
        });
        xhr.open("GET", url, true);
        xhr.send();

    };

    function readData(sData) {
        if (sData.length > 0) {
            $(IdDeLemplacementAvecLeDiese).html(" ");
            mettreLaBarreDeRecherche($('#ContenairPrincipal'));
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<table class="container" id="tableauPrincipal" ></table>');
                $('#tableauPrincipal').append('<tr class="row" ><th class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-lg-offset-1">Cuvée</th><th class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-lg-offset-1">Type</th><th class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-lg-offset-1">Région</th></tr>');
                $(traitement.VIN).each(function (i) {
                    console.log(traitement);
                    $('#tableauPrincipal').append('<tr class="row" id = "ligne' + i + '"><td class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-lg-offset-1">' + traitement.VIN[i].NOM_CUVEE + '</td><td class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-lg-offset-1">' + traitement.VIN[i].COULEUR[0].NOMCOULEUR + '</td><td class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-lg-offset-1">  ' + traitement.VIN[i].REGION[0].NOMREGION + ', ' + traitement.VIN[i].REGION[0].PAYS[0].NOMPAYS + '  </td></tr>');

                                       $('#ligne'+i).click(function(){
                                           developperLigneVin(i);
                                           
                                       });

                    
                    
                    //
                    //création de la div secondaire
                    //                 
                    $('#ligne'+i).after('<div id="infosLigne'+i+'" class="menuRetractable affichageEnLigne col-xs-12 col-sm-12 col-md-12 col-lg-12 col-lg-offset-1 "></div>' );
                                     
                    //
                    //Ajout des mets
                    //
                    $('#infosLigne' + i).append('<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-lg-offset-1" id="metsLigne' + i + '" > Mets en accords : <ul></ul></div> ');
                    $(traitement.VIN[i].S_ACCORDE_AVEC).each(function (k) {
                        $('#metsLigne' + i).append('<li>' + traitement.VIN[i].S_ACCORDE_AVEC[k].METS[0].NOM + '</li> ');
                    });
                    
                    //
                    //Ajout des cépages
                    //
                    $('#infosLigne' + i).append('<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-lg-offset-1" id="cepagesLigne' + i + '"> Cépage(s) : <ul></ul></div>');
                    $(traitement.VIN[i].A_POUR_CEPAGE).each(function (j) {
                        $('#cepagesLigne' + i).append('<li>' + traitement.VIN[i].A_POUR_CEPAGE[j].CEPAGE[0].NOMCEPAGE + '</li> ');
                    });                                  
                    
                    $('#infosLigne'+i).hide();
                });
                
            })();
        } else {
            console.log("Is bad");
        }
    };
    request(readData);

            function developperLigneVin(numeroLigne){
               
             $('#infosLigne'+numeroLigne).toggle();
                
            };

};
