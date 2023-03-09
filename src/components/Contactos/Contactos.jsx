import React from 'react'

const Contactos = () => {
  return (
    <>
    <div class="container-fluid contactos">
        <div class="row">
            <div class="col-lg-6 col-sm-12">
              <div class="col text-center h1 bg-white bg-opacity-75 rounded-4 shadow mt-3">
                Mandanos un mail:
              </div>
                <div class="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
                    <form class="row g-3 needs-validation" action="" novalidate>

                        <div>
                            <label for="Mail" class="form-label">Mail</label>
                            <input id="Mail" name="Mail" type="text" class="form-control" required/>
                        </div>

                        <div>
                             <label for="Nombre" class="form-label">Nombre</label>
                            <input id="Nombre" name="Nombre" type="text" class="form-control" required/>
                        </div>

                        <div>
                            <label for="Pais">Pais</label>
                            <select name="Pais" id="Pais" class="form-select" required>
                                <option selected disabled value="Pais">Seleccione</option>
                                <option value="Pais">Mexico</option>
                                <option value="Pais">Colombia</option>
                                <option value="Pais">Peru</option>
                                <option value="Pais">Argentina</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Contenido</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>

                        <button type="submit" class="btn btn-warning fw-bold">Enviar</button>
   
                    </form>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Contactos
