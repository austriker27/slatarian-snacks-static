<script>
import Snack from './Snack'
 
export default {
  name: 'snack-list',
  components: { Snack },
  props: ['snacks']
}
</script>
 
 
 
<style scoped>
  .snack-list {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
 
  .snack {
    padding: 20px;
  }
 
  @media only screen and (min-width: 600px) {
    .snack {
      width: 50%;
    }
  }
</style>