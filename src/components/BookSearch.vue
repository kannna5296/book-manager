<script setup lang="ts">
import { BookRepository, PageBookSearchResponse } from '@/repositories/generated';
import { ref } from 'vue'
import { queryToString } from '@/util/util'
import {
  LocationQuery,
  onBeforeRouteUpdate,
  useRoute,
  useRouter,
} from "vue-router";

const router = useRouter();
const route = useRoute();

const searchResult = ref<PageBookSearchResponse>()

// TODO 一つの検索条件オブジェクトにしたい
const id = ref<string>();
const name = ref<string>();
const author = ref<string>();
const loading = ref(false);

const updateDataFromUrlQuery = (query: LocationQuery): void => {
  id.value = queryToString(query.id)
  name.value = queryToString(query.name);
  author.value = queryToString(query.author)
};

const createSearchParams = () => ({
  id: id.value,
  name: name.value,
  author: author.value,
  page: 0,
  size: 10
})

const getBooks = () => {
  const searchParams = createSearchParams();
  loading.value = true;
  BookRepository.search(searchParams)
    .then((result) => {
      // useTakeLatest的なWrap関数あ作る
      searchResult.value = result
    }
    ).finally(() => {
      loading.value = false;
    }
    )

}

const updateUrlQueryFromData = (): void => {
  router.push({
    query: {
      id: id.value || undefined,
      name: name.value || undefined,
      author: author.value || undefined,
    },
  });
};

const onSearch = () => {
  // ①Urlを変更することで検索発火
  updateUrlQueryFromData();
}

onBeforeRouteUpdate(async (to, _, next) => {
  // ②Urlを元にv-model変更
  updateDataFromUrlQuery(to.query);
  next();
  // ③v-modelの値でAPI叩く
  await getBooks();
});


// ロードした時にも検索条件入っていて欲しい
updateDataFromUrlQuery(route.query);
getBooks();
</script>

<template>
  <div class="mt-10 w-75 mx-auto">
    <h1>書籍一覧</h1>
    <!-- Component化 -->
    <div class="mb-1 align-center">
      ID
      <v-text-field density="compact" variant="outlined" placeholder="1" v-model="id"></v-text-field>
    </div>
    <div class="mb-1 align-center">
      書籍名
      <v-text-field density="compact" variant="outlined" placeholder="人を動かす" v-model="name"></v-text-field>
    </div>
    <div class="mb-1 align-center">
      著者名
      <v-text-field density="compact" variant="outlined" placeholder="D・カーネギー" v-model="author"></v-text-field>
    </div>

    <v-btn @click="onSearch">検索</v-btn>
    <v-table theme="light">
      <thead>

        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            書籍名
          </th>
          <th class="text-left">
            著者名
          </th>
        </tr>
      </thead>
      <v-progress-circular v-if="loading" :indeterminate="true" color="terminated" />
      <tbody v-else>
        <tr v-for="(item) in searchResult?.content" :key="item.name">
          <td>
            <router-link :to="`${$route.path}/${item.id}`" style="text-decoration: none;">
              {{ item.id }}
            </router-link>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.author }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
