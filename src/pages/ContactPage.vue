<script>
export default {
    name: 'ContactPage',
    data: () => ({
        form: {
            email: '',
            subject: '',
            message: '',
            subscription: '',
        }
    }),
    methods: {
        sendForm() { }
    }
}
</script>

<template>
    <form class="text-white container py-5" action="">
        <!-- EMAIL -->
        <div class="mb-3">
            <label for="email" class="form-label">Email address<sup class="text-danger">*</sup></label>
            <input type="email" class="form-control" id="email" name="email" aria-describedby="name@example.com"
                v-model.trim="form.email" required>
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

        <!-- ISCRIZIONE -->
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="subscription" value="1" v-model.trim="form.subscription">
            <label class="form-check-label" for="subscription">Subscribe to NewsLetter</label>
        </div>

        <!-- BUTTON -->
        <div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</template>