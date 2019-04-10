<template>
  <div id="app">
    <ReactiveBase
      app="debates"
      url="https://u63n3n0euo:1q1xymals1@un-general-debate-7637131809.eu-central-1.bonsaisearch.net/"
    >
      <div class="navbar">
        <h2>UN General Debate Speeches</h2>
        <DataSearch
          componentId="SearchString"
          iconPosition="right"
          :highlight="true"
          :autosuggest="false"
          :dataField="[
            'content'
          ]"
          className="data-search"
          :showClear="false"
          queryFormat="and"
          placeholder="Boolean string"
      />
      </div>
      <button class="toggle" @click="switchContainer">
        {{ showCards ? "Show Filters" : "Show Results" }}
      </button>
      <div class="container">
        <div class="filters-container" :class="{ full: !showCards }">
          <MultiList
            componentId="CountryFilter"
            dataField="country"
            class="filter"
            size=500
            title="Select Countries"
            selectAllLabel="All Countries"
            :react="{ and: ['SearchString', 'YearFilter'] }"
          />
          <MultiList
            componentId="YearFilter"
            dataField="year"
            class="filter"
            size=100
            title="Select Years"
            selectAllLabel="All Years"
            :react="{ and: ['SearchString', 'CountryFilter'] }"
          />
        </div>
        <ReactiveList
          componentId="SearchResult"
          dataField="_id"
          :pagination="true"
          :class="{ full: showCards }"
          :from="0"
          :size="10"
          :showResultStats="false"
          className="result-list-container"
          :react="{ and: ['SearchString', 'CountryFilter', 'YearFilter'] }"
          :innerClass="{ list: 'result-item-container'}"
        >
          <div slot="renderData" slot-scope="{item}" class="mt-3">
            <b-card class="text-left" :title="item.country" :sub-title="item.year">
              <b-card-text class="text-left">
                {{ item.content }}
              </b-card-text>
            </b-card>
          </div>
        </ReactiveList>
      </div>
    </ReactiveBase>
  </div>
</template>

<script>
import "./styles.css";
export default {
  name: "app",
  data: function() {
    return {
      showCards: window.innerWidth <= 768 ? true : false
    };
  },
  methods: {
    switchContainer: function() {
      return (this.showCards = !this.showCards);
    }
  }
};
</script>
