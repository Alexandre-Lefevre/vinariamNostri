function ComboBoxCouleur(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/COULEUR/';

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
            $(IdDeLemplacementAvecLeDiese).html("");
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<select id="couleur" name="couleur"></select>');
                $(traitement.COULEUR.records).each(function (i) {
                    $("#couleur").append('<option value=" ' + traitement.COULEUR.records[i][1] + ' "> ' + traitement.COULEUR.records[i][1] + '</option>');
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
            $(IdDeLemplacementAvecLeDiese).html("");
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<select id="pays" name="pays"></select>');
                $(traitement.PAYS.records).each(function (i) {
                    $("#pays").append('<option value=" ' + traitement.PAYS.records[i][1] + ' "> ' + traitement.PAYS.records[i][1] + '</option>');
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
            $(IdDeLemplacementAvecLeDiese).html("");
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<select id="APPELLATION" name="APPELLATION"></select>');
                $(traitement.APPELLATION.records).each(function (i) {
                    $("#APPELLATION").append('<option value=" ' + traitement.APPELLATION.records[i][1] + ' "> ' + traitement.APPELLATION.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxRegion(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/REGION/';

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
            $(IdDeLemplacementAvecLeDiese).html("");
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<select id="region" name="region"></select>');
                $(traitement.REGION.records).each(function (i) {
                    $("#region").append('<option value=" ' + traitement.REGION.records[i][2] + ' "> ' + traitement.REGION.records[i][2] + '</option>');
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
            $(IdDeLemplacementAvecLeDiese).html("");
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<select id="CONTENANCE" name="CONTENANCE"></select>');
                $(traitement.CONTENANCE.records).each(function (i) {
                    $("#CONTENANCE").append('<option value=" ' + traitement.CONTENANCE.records[i][1] + ' "> ' + traitement.CONTENANCE.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};

function ComboBoxMets(IdDeLemplacementAvecLeDiese) {

    var url = 'http://fbrc.esy.es/afpa/Cave/api.php/METS/';

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
            $(IdDeLemplacementAvecLeDiese).html("");
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<select id="METS" name="METS"></select><span id="afficheMets"></span>');
                $(traitement.METS.records).each(function (i) {
                    $("#METS").append('<option id="' + i + '" value=" ' + traitement.METS.records[i][2] + ' "> ' + traitement.METS.records[i][2] + '</option>');
                });
            })();
            (function () {
                $('#METS').change(function () {
                    $("#METS option:selected").each(function () {
                        let temp = $("#METS option:selected").attr("id");
                        $("#afficheMets").html('<a href="' + traitement.METS.records[temp][3] + '">La recette</a>');
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
            $(IdDeLemplacementAvecLeDiese).html("");
            let traitement = JSON.parse(sData);
            (function () {
                $(traitement.CEPAGE.records).each(function (i) {
                    $("#CheckBoxCepages").append('<input type="checkbox" name="cepage" value=" ' + traitement.CEPAGE.records[i][1] + ' "> ' + traitement.CEPAGE.records[i][1] + '     ');
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
            $(IdDeLemplacementAvecLeDiese).html("");
            let traitement = JSON.parse(sData);
            (function () {
                $(IdDeLemplacementAvecLeDiese).append('<select id="EMPLACEMENT" name="EMPLACEMENT"></select>');
                $(traitement.EMPLACEMENT.records).each(function (i) {
                    console.log(traitement);
                    $("#EMPLACEMENT").append('<option value=" ' + traitement.EMPLACEMENT.records[i][1] + ' "> ' + traitement.EMPLACEMENT.records[i][1] + '</option>');
                });
            })();
        } else {
            console.log("Is bad");
        }

    };

    request(readData);

};




$("#btnCave").click(function () {
    //    ComboBoxCouleur('#ComboBoxCouleur');
    //    ComboBoxPays('#ComboBoxPays');
    //    ComboBoxAppellation('#ComboBoxAppellation');
    //    ComboBoxRegion('#ComboBoxRegion');
    //    ComboBoxContenance('#ComboBoxContenance');
    //    ComboBoxMets('#ComboBoxMets');
});
