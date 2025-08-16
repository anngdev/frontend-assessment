<template>
  <TabPanel class="md:block hidden" :datas="tabsData" :active-index="activeIndex" @tab-switched="tabSwitch"/>
  <Accordion class="block md:hidden"  :datas="tabsData" :active-index="activeIndex" @tab-switched="tabSwitch"/>

</template>

<script>
import jsonData from '../assets/data.json';
import TabPanel from '../components/TabPanel.vue';
import Accordion from '../components/Accordion.vue';
export default {
  data() {
    return {
      tabsData: jsonData,
      activeContent: "",
      activeIndex:0
    };
  },
  components: {
    TabPanel,
    Accordion
  },
  computed: {
  },
  methods: {
    tabSwitch(idx) {
      this.textContent = this.tabsData[idx].content
      this.activeIndex = idx
    }
  },
};
</script>

<style scoped>
</style>