import { fetchUser } from "./api";

test("Deve retornar os dados do usuário", async () => {
  const user = await fetchUser();
  expect(user).toEqual({ id: 1, nome: "João" });
});
