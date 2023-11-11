recreate partial rendering by SSG the ssg route and CSR the regular routes.

* (csr)/user/[userId]/index.tsx
* ssg/user/[userId]/index.tsx

SSG the /ssg routes but serve the index from /ssg/user/[userId]/index.tsx when navigating to /csr)/user/[userId]/index.tsx with the idea is that the CSR router would take over. The problem is that qwik-city router was not built for this purpose
