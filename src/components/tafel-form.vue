<template>
  <div class="flex flex-col min-h-screen">
    <div class="relative bg-gray-50 overflow-hidden">
      <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"
        >
          <div class="text-center">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-5xl"
            >
              Wir helfen euch neue Helfer zu finden!
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <div
        class="mt-5 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-8 lg:mt-12 xl:mt-16"
      >
        <label class="block text-sm font-medium leading-5 text-gray-700">{{
          options.question
        }}</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            class="form-input block w-full sm:text-sm sm:leading-5"
            type="text"
            placeholder="PLZ"
            @keyup="getAddress"
            @keyup.enter="getAddress"
            v-model="plz"
          />
        </div>
        <form class="mb-16" @submit.prevent="sendData" v-if="show">
          <div class="lg:flex">
            <div
              class="m-2 flex-1 mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10"
            >
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ options.data }}
              </h3>
              <div class="mt-6 sm:mt-5">
                <div
                  class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                  v-for="(value, key) in address"
                  :key="key"
                >
                  <label
                    class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                    >{{ key | capitalize }}</label
                  >
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-xs rounded-md shadow-sm">
                      <input
                        class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        :value="value"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="m-2 flex-1 mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10"
            >
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ options.suche }}
              </h3>
              <div class="mt-6 sm:mt-5">
                <div class="sm:border-t sm:border-gray-200 sm:pt-5">
                  <fieldset>
                    <div
                      class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-baseline"
                    >
                      <legend
                        class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                      >
                        Details
                      </legend>
                      <div class="mt-4 sm:mt-0">
                        <div class="max-w-lg">
                          <div
                            class="mt-4"
                            v-for="item in options.help"
                            :key="item.option"
                          >
                            <div class="relative flex items-start">
                              <div class="absolute flex items-center h-5">
                                <input
                                  type="checkbox"
                                  class="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                                  :value="item.option"
                                  v-model="selectedCheckbox"
                                />
                              </div>
                              <div class="pl-7 text-sm leading-5">
                                <label class="font-medium text-gray-700">{{
                                  item.option
                                }}</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div
                  class="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <fieldset>
                    <div
                      class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-baseline"
                    >
                      <legend
                        class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                      >
                        {{ options.textarea }}
                      </legend>
                      <div class="max-w-lg">
                        <div class="mt-4">
                          <div class="mt-4 flex items-center">
                            <textarea
                              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                              rows="3"
                              v-model="address.kommentar"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div
                  class="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <fieldset>
                    <div
                      class="sm:grid sm:grid-cols-2 sm:gap-4 sm:items-baseline"
                    >
                      <legend
                        class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                      >
                        {{ options.kontakt }}
                      </legend>
                      <div class="max-w-lg">
                        <div
                          class="mt-4"
                          v-for="item in options.contact"
                          :key="item.option"
                        >
                          <div class="mt-4 flex items-center">
                            <input
                              name="form-input push_notifications"
                              type="radio"
                              class="form-radio h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                              :value="item.option"
                              v-model="address.kontaktart"
                              :key="item.option"
                            />
                            <label class="ml-3"
                              ><span
                                class="block text-sm leading-5 font-medium text-gray-700"
                                >{{ item.option }}</span
                              ></label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="mt-8 border-t border-gray-200 pt-5">
                  <p class="text-base flex justify-end mb-6 text-green-600">
                    {{ options.info }}
                  </p>
                  <div class="flex justify-end">
                    <span class="ml-3 inline-flex rounded-md shadow-sm">
                      <button
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo active:bg-green-700 transition duration-150 ease-in-out"
                      >
                        {{ options.submit }}
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div
          class="mt-5 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-8 lg:mt-12 xl:mt-16 bg-green-300 p-8"
          role="alert"
          v-else-if="send"
          v-html="options.success"
        ></div>
        <div
          class="mt-5 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-8 lg:mt-12 xl:mt-16 bg-red-500 text-white p-8"
          role="alert"
          v-else-if="error"
          v-html="options.error"
        ></div>
        <div
          class="mt-5 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-8 lg:mt-12 xl:mt-16"
          v-if="!show"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import tafeln from "@/assets/tafeln.json";
import resources from "@/assets/resources.json";

export default {
  name: "tafel-form",
  components: {
  },
  data() {
    return {
      data: tafeln,
      plz: "",
      show: false,
      send: false,
      error: false,
      options: resources,
      address: {},
      selectedCheckbox: []
    };
  },
  methods: {
    getAddress() {
      if (this.plz.length === 5) {
        this.address = {
          name: "",
          adresse: "",
          plz: this.plz,
          ort: "",
          ansprechpartner: "",
          tel: "",
          fax: "",
          mail: "",
          url: ""
        };
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i]["plz"] === this.plz) {
            this.address = this.data[i];
            break;
          }
        }
        this.send = false;
        this.show = true;
      }
    },
    sendData() {
      for (let i = 0; i < this.selectedCheckbox.length; i++) {
        this.address["option" + (i + 1)] = this.selectedCheckbox[i];
      }
      this.$http
        .post(
          "https://aiw6w7f673.execute-api.eu-west-1.amazonaws.com/prod/anfrage",
          this.address,
          {
            headers: {
              "x-api-key": "MQEZ4icN9737oFYkGqmFO1r3e5YvzzU67LmJFave"
            }
          }
        )
        .then(() => {
          this.show = false;
          this.send = true;
        })
        .catch(error => {
          this.error = true;
          console.log(error);
        });
    }
  }
};
</script>
