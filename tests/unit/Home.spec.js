import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("renders home div", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find(".home").exists()).toBeTruthy();
    expect(wrapper.find(".home").is("div")).toBeTruthy();
  });
});
