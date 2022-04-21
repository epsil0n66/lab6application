<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-dialog
      v-model="dialog"
      width="25vw">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
           {{dialog_message}}
            <v-icon
            :color="icon_color"
            class="ml-3 mdi-spin">
              {{dialog_icon}}
            </v-icon>
          </v-card-title>
        </v-card>
      </v-dialog>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Приложение на Vue
        </h1>

        <p class="subheading font-weight-regular">
          <v-btn
          class="mr-3 mt-3"
          elevation="3"
          color="red lighten-2"
          @click="handle_button()">
            Создать ошибку
          </v-btn>

          <v-btn
          color="green lighten-2"
          class="ml-3 mt-3"
          elevation="3"
          @click="handle_button2()">
            Создать сообщени
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as Sentry from "@sentry/vue";
Sentry.setTag("custom_tag", "VueJS");
Sentry.setTag("another_tag", "Vue > React");

  export default {
    name: 'HelloWorld',

    data: () => ({
      dialog: false,
      dialog_message: null,
      dialog_icon: null,
      icon_color: null,
    }),
    methods: {
      handle_button(){
        this.dialog = true
        this.dialog_message = 'Ошибка создана'
        this.dialog_icon = 'mdi-close'
        this.icon_color = 'red'
        throw new Error('Sentry error')

      },
      handle_button2(){
        this.dialog = true
        this.dialog_message = 'Сообщение создано'
        this.dialog_icon = 'mdi-check'
        this.icon_color = 'green'
        Sentry.captureMessage("Sentry message");
      }
    }
  }
</script>
