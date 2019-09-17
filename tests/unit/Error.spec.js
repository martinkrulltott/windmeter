import { shallowMount } from "@vue/test-utils";
import Error from "@/views/Error.vue";

describe("Error.vue", () => {
  it("renders error message", () => {
    const wrapper = shallowMount(Error);
    expect(wrapper.find(".error").exists()).toBeTruthy();
    expect(wrapper.find(".error").is("div")).toBeTruthy();
    expect(wrapper.find(".message").exists()).toBeTruthy()
    expect(wrapper.find(".message").is("p")).toBeTruthy();
  });
});
