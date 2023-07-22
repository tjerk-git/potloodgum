<script>
  export let image;
  export let name;

  import { Button, Hr, Html, Text, Img } from "svelte-email";
</script>

<Html lang="en">
  <Text>
    An artwork by {name}!
  </Text>

  <Img src={image} alt="Svelte logo" width="200" height="50" />
  <Hr />
</Html>
