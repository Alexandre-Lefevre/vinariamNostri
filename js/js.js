

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
                console.log(traitement);
                $("#CONTENANCE").append('<option value=" ' + traitement.CONTENANCE.records[i][1] + ' "> ' + traitement.CONTENANCE.records[i][1] + '</option>');
            });
        })();
    } else {
        console.log("Is bad");
    }

};
    
    request(readData);

};

$("#btnCave").click(function (){
    ComboBoxCouleur('#ComboBoxCouleur');
    ComboBoxPays('#ComboBoxPays');
    ComboBoxAppellation('#ComboBoxAppellation');
    ComboBoxRegion('#ComboBoxRegion');
    ComboBoxContenance('#ComboBoxContenance');
});