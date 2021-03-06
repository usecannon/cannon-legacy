<template>
  <CBox py="2" maxWidth="containers.lg" mx="auto" px="4">
    <div v-if="p">
      <CGrid
        template-columns="repeat(12, 1fr)"
        gap="6"
        py="8"
        maxWidth="containers.lg"
        mx="auto"
        spacing="40px"
        alignItems="center"
      >
        <CGridItem
          :col-span="[12, 7]"
          py="6"
          :pr="[0, 4]"
          :borderRight="[null, '1px solid rgba(255,255,255,0.25)']"
        >
          <CHeading as="h4" size="md" mb="1">{{ p.name }}</CHeading>
          <CText color="gray.300" mb="3">{{ p.description }}</CText>
          <CBox mb="2">
            <CTag
              size="sm"
              variantColor="blue"
              mr="2"
              v-for="t in p.tags"
              :key="t.tag.id"
              >{{ t.tag.id }}</CTag
            >
          </CBox>
          <CText color="gray.300" fontSize="xs" fontFamily="mono"
            >version {{ p.version }} published by
            <CLink
              isExternal
              textDecoration="underline"
              :href="`https://etherscan.io/address/${p.publisher}`"
              class="truncate"
              >{{ p.publisher }}</CLink
            >
            {{ timeAgo }}</CText
          >
        </CGridItem>
        <CGridItem :col-span="[12, 5]">
          <CHeading
            as="h4"
            size="sm"
            textTransform="uppercase"
            fontWeight="normal"
            letterSpacing="1px"
            mb="2"
            >Quick Start</CHeading
          >
          <CCode
            variant-color="black"
            background="black"
            py="1"
            px="3"
            width="100%"
            mb="2"
            >npx hardhat cannon {{ p.name }}:{{ p.version }}</CCode
          >
          <CText fontSize="12px"
            ><CLink
              as="nuxt-link"
              to="/docs#install-cannon"
              textDecoration="underline"
              >Add Cannon to your project</CLink
            >
            and use this command to start a local node with this package.
          </CText>
        </CGridItem>
      </CGrid>
      <CTabs variant-color="teal">
        <CTabList>
          <CTab v-if="p.readme.length">Readme</CTab>
          <CTab v-if="p.cannonfile.length">Cannonfile</CTab>
        </CTabList>
        <CTabPanels>
          <CTabPanel v-if="p.readme.length" py="8">
            <div v-html="readme" class="prose" />
          </CTabPanel>
          <CTabPanel py="4" v-if="p.cannonfile.length">
            <client-only :placeholder="p.cannonfile">
              <prism-editor
                class="code-editor"
                v-model="p.cannonfile"
                :highlight="highlighter"
              ></prism-editor>
            </client-only>
          </CTabPanel>
        </CTabPanels>
      </CTabs>
    </div>
    <div v-else>
      <CText textAlign="center"><CSpinner my="12" /></CText>
    </div>
  </CBox>
</template>

<script lang="js">
import gql from 'graphql-tag'
import { formatDistanceToNow } from 'date-fns'

// import Prism Editor
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-toml';

var markdown = require('remarked');

export default {
  name: 'Package',
  data() {
    return {
      packages: [],
      readme: ''
    }
  },
  components: {
    PrismEditor,
  },
  methods: {
    highlighter(code) {
      return  highlight(code, languages.toml);
    },
  },
  computed: {
    p(){
      return this.packages.length ? this.packages[0] : null
    },
    timeAgo(){
      return formatDistanceToNow(new Date(this.p.added * 1000), { addSuffix: true });
    }
  },
  watch: {
    p(){
      this.readme = this.p.readme ? markdown(this.p.readme) : ''
    }
  },
  apollo: {
    packages: {
      query: gql`query getPackage($name: String!) {
        packages(first: 1, orderDirection: desc, orderBy: added, where: {name: $name}){
          id
          name
          description
          version
          url
          added
          publisher
          readme
          cannonfile
          tags {
            tag {
              id
            }           
          }
        }
      }`,
      variables () {
        return {
          name: this.$route.params.name
        }
      }
    }
  }
}
</script>

<style scoped>
div[data-chakra-component='CTabList'] {
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}
::v-deep button[aria-selected='true'] {
  color: #00bce6;
  border-bottom: 1px solid #00bce6;
  margin-bottom: -1px;
}
::v-deep button[data-chakra-component='CTab']:focus {
  box-shadow: none;
}
::v-deep button[data-chakra-component='CTab']:active {
  background: transparent;
}
</style>