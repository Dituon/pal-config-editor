<script setup lang="ts">
import {palConfigInfoZhCn} from "@/data/lang/zh-cn";
import {PalConfig} from "@/data/palConfig";
import {ref} from "vue";

const model = defineModel<PalConfig>()
const data = ref(model)

const palConfigInfo = Object.freeze(palConfigInfoZhCn)
</script>

<template>
  <v-container>
    <div v-for="(info, key) in palConfigInfo">
      <div v-if="(info.max || info.min) && info.max !== Infinity">
        <div class="text-caption">
          {{info.title}}
        </div>
        <v-slider
          v-model="data[key]"
          :max="info.max as number"
          :min="info.min as number"
          :step="info.step ?? 0.1"
          :prepend-icon="info.icon as any"
          :hint="info.desc"
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
      </div>
      <v-switch
        v-else-if="info.type==='checkbox'"
        v-model="data[key]"
        :color="data[key] ? 'green' : ''"
        :label="info.title"
        :prepend-icon="info.icon as any"
        :hint="info.desc"
      >
      </v-switch>
      <v-select
        v-else-if="info.type==='select'"
        v-model="data[key]"
        :label="info.title"
        :items="info.options as {title: string, desc: string, key: string}[]"
        item-value="key"
        item-title="title"
        :prepend-icon="info.icon as any"
        :hint="info.desc"
      >
          <template v-slot:item="{ props, item }">
            <v-list-item v-bind="props" :subtitle="item.raw.desc"></v-list-item>
          </template>
      </v-select>
      <v-text-field
        v-else
        :type="info.type"
        :label="info.title"
        v-model="data[key]"
        :suffix="info.suffix as string"
        :prepend-icon="info.icon as any"
        :hint="info.desc"
      >
      </v-text-field>
    </div>
  </v-container>
</template>
