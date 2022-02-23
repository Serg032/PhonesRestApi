const { Phone } = require('./../models/mongoose')

const create = async (document) => {
    const phone = await new Phone(document).save()
    return phone
}

const readAll = async () => {
    const phones = await Phone.find()
    return phones
}

const read = async (id) => {
    const phone = await Phone.findById(id)
    return phone
}

const update = async (id, document) => {
    const phone = await Phone.findByIdAndUpdate(id)
    phone.set({...phone, ...document})
    await phone.save()
    return phone
}

const remove = async (id) => {
    await Phone.findByIdAndDelete(id)
}
 
module.exports = {
    create,
    readAll,
    read,
    update,
    remove
}