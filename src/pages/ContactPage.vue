<script>
import axios from 'axios';

const endpoint = 'http://127.0.0.1:8000/api/contact-mail';
const emptyForm = { sender: '', subject: '', message: '' };
export default {
    name: 'ContactPage',
    data: () => ({
        // Prendo i campi con i v-model
        form: emptyForm,
        isLoading: false,
    }),
    methods: {
        sendForm() {
            this.isLoading = true;
            axios.post(endpoint, this.form)
                .then(() => {
                    this.form = { sender: '', subject: '', message: '', };
                })
                .catch(err => { console.error(err) })
                .then(() => { this.isLoading = false });
        }
    }
}
</script>

<template>
    <AppLoader v-if="isLoading" />
    <div class="container p-2" v-else>
    <h1 class="text-white">Contact us!</h1>
    <!-- Prevent e intercetta il method sendform -->
    <form @submit.prevent="sendForm" class="text-white py-5" novalidate>
        <!-- EMAIL -->
            <div class="mb-3">
                <label for="sender" class="form-label">Email address<sup class="text-danger">*</sup></label>
                <input type="email" class="form-control" id="sender" name="sender" aria-describedby="name@example.com"
                    v-model.trim="form.sender" required>
                <small class="text-muted form-text">Your email</small>
            </div>

            <!-- OGGETTO -->
            <div class="mb-3">
                <label for="subject" class="form-label">Email Subject<sup class="text-danger">*</sup></label>
                <input type="text" class="form-control" id="subject" name="subject" v-model.trim="form.subject" required>
            </div>

            <!-- CONTENUTO DEL MESSAGGIO -->
            <div class="mb-3">
                <label for="message" class="form-label">Message<sup class="text-danger">*</sup></label>
                <textarea class="form-control" rows="3" name="message" id="message" v-model.trim="form.message"
                    required></textarea>
            </div>

            <!--* ISCRIZIONE NEWSLETTER -->
            <!-- <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="subscription" value="1"
                                                    v-model.trim="form.subscription">
                                                <label class="form-check-label" for="subscription">Subscribe to NewsLetter</label>
                                            </div> -->

            <!-- BUTTON -->
            <div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>