<template>
  <CGrid
    template-columns="repeat(12, 1fr)"
    gap="6"
    py="10"
    maxWidth="containers.lg"
    mx="auto"
    px="4"
    spacing="40px"
  >
    <CGridItem :col-span="[12, 3]">
      <CHeading
        as="h3"
        size="sm"
        textTransform="uppercase"
        fontWeight="normal"
        letterSpacing="1px"
        mb="2"
        >Search</CHeading
      >
      <CInputGroup>
        <CInputLeftElement
          ><div
            style="
              transform: scale(0.8);
              transform-origin: center left;
              opacity: 0.66;
            "
            v-html="$feathericons['search'].toSvg()"
        /></CInputLeftElement>
        <CInput
          background="transparent"
          size="sm"
          borderColor="gray.500"
          mb="6"
          v-model="query"
        />
      </CInputGroup>

      <CHeading
        as="h3"
        size="sm"
        textTransform="uppercase"
        fontWeight="normal"
        letterSpacing="1px"
        mb="2"
        v-if="tags.length"
        >Filter</CHeading
      >
      <CCheckboxGroup mb="4">
        <CCheckbox v-for="t in tags" :key="t.id">{{ t.id }}</CCheckbox>
      </CCheckboxGroup>
      <!--
      <CFormControl>
        <CSwitch size="sm" id="testnet" />
        <CFormLabel size="sm" html-for="testnet">
          Show testnet packages</CFormLabel
        >
      </CFormControl>
      -->
    </CGridItem>
    <CGridItem :col-span="[12, 9]">
      <CBox v-if="$apollo.loading" py="20" textAlign="center">
        <CSpinner />
      </CBox>
      <CBox textAlign="center" v-else-if="packages.length == 0" py="20"
        >No packages found.</CBox
      >
      <Preview v-else v-for="p in packages" :key="p.id" :p="p" />
    </CGridItem>
  </CGrid>
</template>

<script lang="js">
import gql from 'graphql-tag'
import Preview from "../components/search/Preview"

export default {
  name: 'Search',
  data() {
    return {
      packages: [],
      tags: [],
      selectedTags: [],
      query: '',
    }
  },
  components: {
    Preview
  },
  watch: {
    query() {
      this.$apollo.queries.packages.setVariables({
        query: this.query
      })
    }
  },
  apollo: {
    packages: {
      query: gql`query getPackages($query: String!) {
        packages: packages(first: 20, orderDirection: desc, orderBy: added, where: {name_contains: $query}){
          id
          name
          description
          version
          url
          added
          publisher
          tags {
            tag {
              id
            }           
          }
        }
      }`,
      variables: {
        query: ''
      }
    },
    tags: {
      query: gql`query getTags {
        tags: tags(first: 10, orderDirection: desc, orderBy: count){
          id
          count
        }
      }`
    }
  }
}
</script>
