<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">List of Contacts</h1>
    <h5 class="h5">No. of contacts: {{ contacts.length }}</h5>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in contacts" :key="contact.id">
              <td>{{ contact._id }}</td>
              <td>{{ contact.name }}</td>
              <td>{{ contact.gender }}</td>
              <td>{{ contact.email }}</td>
              <td>{{ contact.phone }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="populateContactToEdit(contact)">Edit</a> -
                <a href="#" @click.prevent="deleteContact(contact._id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model._id ? 'Edit Post ID: ' + model._id : 'New Contact')">
            <form @submit.prevent="saveContact">
              <b-form-group label="Name">
                <b-form-input type="text" v-model="model.name"></b-form-input>
              </b-form-group>
              <b-form-group label="Gender">
                <b-form-input type="text" v-model="model.gender"></b-form-input>
              </b-form-group>
              <b-form-group label="Email">
                <b-form-textarea rows="2" v-model="model.email"></b-form-textarea>
              </b-form-group>
              <b-form-group label="Phone">
                <b-form-input type="text" v-model="model.phone"></b-form-input>
              </b-form-group>
              <div>
                <b-btn type="submit" variant="success">Save Contact</b-btn>
              </div>
            </form>
          </b-card>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import contactService from '@/services/contact.service'

export default {
  name: 'Contacts',
  data () {
    return {
      loading: false,
      contacts: [],
      model: {}
    }
  },
  async created () {
    this.refreshContacts()
  },
  methods: {
    async refreshContacts () {
      this.loading = true
      this.contacts = await contactService.getAll().then(res => res.data)
      this.loading = false
    },
    async populateContactToEdit (contact) {
      this.model = Object.assign({}, contact)
    },
    async saveContact () {
      if (this.model._id) {
        await contactService.updateContact(this.model._id, this.model)
      } else {
        await contactService.createContact(this.model)
      }
      this.model = {} // reset form
      await this.refreshContacts()
    },
    async deleteContact (id) {
      if (confirm('Are you sure you want to delete this contact?')) {
        // if we are editing a contact we deleted, remove it from the form
        if (this.model._id === id) {
          this.model = {}
        }
        await contactService.deleteContact(id)
        await this.refreshContacts()
      }
    }
  }
}
</script>
