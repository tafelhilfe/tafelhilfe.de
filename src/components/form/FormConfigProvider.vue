<script>
import fromConfig from '../../config/tafelFormConfig.json'
import { getComponent } from './ComponentTypes'

export default {
  name: 'FormConfigProvider',
  functional: true,
  render(createElement) {
    const fieldObjects = fromConfig.map((field) => {
      const component = getComponent(field.type)
      return { ...field, component }
    })
    return createElement(getComponent('formTemplate'), {
      props: {
        formFields: fieldObjects
      }
    })
  }
}
</script>
