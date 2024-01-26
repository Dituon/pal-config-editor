<script setup lang="ts">
import {palConfigInfoZhCn} from "@/lang/zh-cn";
import {PalConfig} from "@/data/palConfig";
import {ref} from "vue";

const model = defineModel<PalConfig>()
const data = ref(model)

const palConfigInfo = Object.freeze(palConfigInfoZhCn)
</script>

<template>
  <v-container>
    <div v-for="(info, key) in palConfigInfo">
      <v-slider
        v-if="info.max && info.min"
        v-model="data[key]"
        :label="info.title"
        :max="info.max as number"
        :min="info.min as number"
        :step="info.step ?? 0.1"
        v-on:update:model="data[key]"
      >
        <template v-slot:append>
          <v-text-field
            v-model="data[key]"
            hide-details
            single-line
            density="compact"
            type="number"
            style="width: 6em"
            :suffix="info.suffix as string"
          ></v-text-field>
        </template>
      </v-slider>
      <v-switch
        v-else-if="info.type==='checkbox'"
        v-model="data[key]"
        :color="data[key] ? 'green' : ''"
        :label="info.title"
      >
      </v-switch>
      <v-text-field
        v-else
        :type="info.type"
        :label="info.title"
        v-model="data[key]"
        :suffix="info.suffix as string"
      >
      </v-text-field>
    </div>
  </v-container>
</template>
