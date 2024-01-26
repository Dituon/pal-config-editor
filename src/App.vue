<script setup lang="ts">
import PalConfigEditor from "@/components/PalConfigEditor.vue";
import {defaultPalConfig} from "@/data/palConfig";
import {ref, watch} from "vue";
import encodeConfig from "@/serialize/encode";
import {saveAs} from "file-saver";
import decodeConfig from "@/serialize/decode";

const data = ref({...defaultPalConfig})

let files = ref<FileList>([] as any as FileList)

watch(files, n => {
  if (!n.length) return
  const file = n.item(0)
  const reader = new FileReader();

  reader.onload = (e) => {
    if (e.target) {
      const content = e.target.result as string;
      data.value = decodeConfig(content)
    } else {
      throw new Error('Failed to read file.')
    }
  }
  reader.onerror = () => {
    throw new Error('Error reading file.')
  }

  reader.readAsText(file)
})

function save() {
  console.log(encodeConfig(data.value))

  saveAs(
    new Blob(
      [encodeConfig(data.value)],
      {type: "text/plain;charset=utf-8"}
    ),
    'PalWorldSettings.ini'
  )
}
</script>

<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <v-app-bar-title>
          Palworld Config Editor
        </v-app-bar-title>
        <v-btn
          icon="mdi-github"
          href="https://github.com/Dituon/pal-config-editor"
        ></v-btn>
        <v-btn icon="">
          <v-icon>
            mdi-file-edit
          </v-icon>
          <v-dialog
            activator="parent"
            width="400"
          >
            <v-card>
              <v-card-text>
                <v-file-input
                  accept=".ini"
                  label="PalWorldSettings.ini"
                  v-model="files"
                  hide-details
                ></v-file-input>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-btn>
        <v-btn
          icon="mdi-content-save"
          @click="save"
        ></v-btn>
      </v-app-bar>
      <PalConfigEditor v-model="data"/>
    </v-main>
  </v-app>
</template>
