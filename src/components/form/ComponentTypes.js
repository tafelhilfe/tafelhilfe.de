import FormTemplate from './FormTemplate.vue'
import InputBox from './FormElements/Fields/InputBox.vue'
import RadioButton from './FormElements/Fields/RadioButton.vue'
import CheckBox from './FormElements/Fields/CheckBox.vue'
import TextArea from "./FormElements/Fields/TextArea.vue"
import KindOfHelp from "@/components/form/FormElements/Fields/KindOfHelp";
import ContactDataValidation from "@/components/form/FormElements/Fields/ContactDataValidation";
import RadioButtonSwitch from "@/components/form/FormElements/Fields/RadioButtonSwitch";
import FormResult from "@/components/form/FormElements/FormResult";

const COMPONENT_MAP = {
  formTemplate: FormTemplate,
  text: InputBox,
  radio: RadioButton,
  check: CheckBox,
  textarea: TextArea,
  kindOfHelp: KindOfHelp,
  contactDataValidation: ContactDataValidation,
  radioSwitch: RadioButtonSwitch,
  formResult: FormResult
}

export function getComponent(type) {
  return COMPONENT_MAP[type]
}
