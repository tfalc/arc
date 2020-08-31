                /*    function mostraQueda() {
                        var queda = document.getElementById("mostraQueda");
                        if (queda.style.display === "none") {
                            queda.style.display = "block";
                        } else {
                            queda.style.display = "none";
                        }
                    }
                    function mostraNormalizacao() {
                        var queda = document.getElementById("mostraNormalizacao");
                        if (queda.style.display === "none") {
                            queda.style.display = "block";
                        } else {
                            queda.style.display = "none";
                        }
                    }
                    */
                   function textoEncerramento() {
                    var queda = document.getElementById("textoEncerramento");
                    if (queda.style.display === "none") {
                        queda.style.display = "block";
                    } else {
                        queda.style.display = "none";
                    }
                }

                function copiaParaClipboard(string) {
                    function listener(copiaPre) {
                        copiaPre.clipboardData.setData("text/html", string);
                        copiaPre.clipboardData.setData("text/plain", string);
                        copiaPre.preventDefault();
                    }
                    document.addEventListener("copy", listener);
                    document.execCommand("copy");
                    document.removeEventListener("copy", listener);
                };
                
                $(document).on('click', "#ResetForm", function() {
                    // Resetar formulario
                    document.getElementById('formularioQuedas').reset();
                });

                $('.dropdown-toggle').dropdown();