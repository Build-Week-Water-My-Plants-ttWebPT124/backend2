const db = require("../data/db-config")

   async function add(cred){
    const [id] = await db("users").insert(cred)

    return findById(id)
}

function find(){
    return db("users")
           .select("id", "username", "phoneNumber")
}

function findBy(filter){
    return db("users")
        .select("id", "username", "phoneNumber", "password")
        .where(filter)

}

function findById(id){
    return db("users")
           .select("id", "username", "phoneNumber")
           .where({ id })
           .first()
}

function update(id, changes) {
    return db("users")
      .where("id", id)
      .update(changes)
      .then(count => (count > 0 ? get(id) : null));
  }

function remove(id) {
    return db("users")
           .where( { id } )
           .del()
}

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    
}
