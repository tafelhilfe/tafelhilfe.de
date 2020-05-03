<template>
  <form class="form-template container p-0 pb-4 p-lg-16" @submit.prevent="submit">
    <!-- Form Template -->
    <template v-for="(field, key) in formFields">
      <FieldGroup :key="`${_uid}-${field.name}`" :field-id="key">
        <div class="field-area">
          <FieldLabel :for="`${_uid}-${field.name}`">
            {{ formState.backStack.length + 1 }}. {{ field.label }}
          </FieldLabel>
          <Component
            :is="field.component"
            :id="`${_uid}-${field.name}`"
            v-model="formData[field.name]"
            v-validate="field.validation"
            v-bind="{ ...field.options.attrs }"
            :name="`${field.name}`"
            :type="field.type"
            :data-vv-as="field.label"
            :options="!!field.options.choices ? field.options.choices : false"
            :data="field.options"
            @input="
              updateField({ key: field.name, value: formData[field.name] })
            "
            @nextField="setNextField"
          />
        </div>
      </FieldGroup>
    </template>

    <FormResult />

    <FormNav
      @back="back"
      @next="next"
    />

  </form>
</template>

<script>
import { mapMutations } from 'vuex'
import FormProgress from '@/components/form/FormElements/FormProgress'
import FormNav from '@/components/form/FormElements/FormNav'
import formMixin from '../../mixins/formMixin'
import FieldGroup from './FormElements/FieldGroup.vue'
import FieldError from './FormElements/FieldError.vue'
import FieldLabel from './FormElements/FieldLabel.vue'
import FormResult from "@/components/form/FormElements/FormResult";
export default {
  name: 'FormTemplate',
  components: {
    FormResult,
    FormNav,
    FormProgress,
    FieldGroup,
    FieldError,
    FieldLabel
  },
  mixins: [formMixin],
  props: ['formFields'],
  provide() {
    return {
      formState: this.formState
    }
  },
  methods: {
    ...mapMutations({
      updateField: 'lead/updateField'
    }),
    setNextField(value) {
      this.formState.nextField = value
    }
  }
}
</script>
