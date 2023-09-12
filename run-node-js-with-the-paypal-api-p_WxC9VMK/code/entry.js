import { axios } from "@pipedream/platform"
export default defineComponent({
  props: {
    paypal: {
      type: "app",
      app: "paypal",
    }
  },
  async run({steps, $}) {
    return await axios($, {
      url: `${this.paypal.$auth.app_type}.paypal.com/v1/identity/oauth2/userinfo`,
      headers: {
        Authorization: `Bearer ${this.paypal.$auth.oauth_access_token}`,
      },
      params: {
        schema: `paypalv1.1`,
      },
    })
  },
})
