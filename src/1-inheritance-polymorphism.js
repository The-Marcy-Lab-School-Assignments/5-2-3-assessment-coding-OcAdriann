class Phone {
  constructor(number) {
    this.phoneNumber = number;
    this.contacts = [];
  }
  addContact(contact) {
    if(Object.keys(contact).length !== 2 || contact.phoneNumber.length !== 10) {
      return "Invalid"
    } else {
      this.contacts.push(contact)
      return `${contact.name} added.`
    }
    // const validContact = { name: 'string', phoneNumber: 'string' }
    // if(Object.keys(contact) !== Object.keys(validContact)) {
    //   return 'Invalid'
    // } else {
    //   this.contacts.push(contact)
    //   return `${contact.name} added.`
    // }
  }
  removeContact(name) {
    const nameArr = []
    for(const contact of this.contacts) {
      nameArr.push(contact.name)
    }
    if(nameArr.includes(name)) {
      this.contacts.splice(this.contacts.findIndex((contact) => contact.name === name), 1);
      return `${name} removed.`
    } else {
      return "Contact not found."
    }
  }
  makeCall(identifier) {
    const contact = this.contacts.find((contact) => contact.name === identifier || contact.phoneNumber === identifier);
    if (contact) {
      return `Calling ${contact.name}...`;
    }
    if (identifier.length === 10 && !isNaN(identifier)) {
      return `Calling ${identifier}...`;
    }
    return 'Invalid';
  }
}

class AppleIPhone extends Phone {

  constructor(phoneNumber, model) {
    super(phoneNumber)
    this.model = model;
  }
  
  sendIMessage(IPhone, IMsg) {
    if (IPhone instanceof AppleIPhone) {
      return `Message: ${IMsg} - sent from ${this.model}`;
    } else {
      return 'Message could not be sent.';
    }
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
