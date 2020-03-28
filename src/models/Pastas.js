import Modal from './Modal'
import { snapshotToArray } from '../helpers';
import firebase, { database } from '../firebase'
const TOTAL_PASTA_PAGINA = 30

class Pastas extends Modal{

  constructor(id_pasta){
    this.id_pasta = id_pasta
  }

  // Pegar pastas
  static get(callback = () => {}, id_categoria = false, pagina = 1){
    let pastas = db.collection('PASTAS')
    id_categoria && (pastas = pastas.where('id_categoria', 'in', id_categoria))
    pastas
      .limit(TOTAL_PASTA_PAGINA)
      .get()
      .then(docs => {
        callback(snapshotToArray(docs))
      })
      .catch(err => {
        this._handleError(err)
        return { error: true, err };
      })
  }

  // Altarar dados da pasta (somente o criador)
  set(dados){}

  // Criar uma nova pasta (somente o criador)
  create(pasta){}

  // Seguir a pasta
  follow(){}

  // Deixa de seguir a pasta
  unfollow(){}

  // Dar like na pasta
  like(){}

  // Dar deslike na pasta
  deslike(){}
}

export default Pastas