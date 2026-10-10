
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { name: "Mi Empresa" },
    update: {},
    create: {
      name: "Mi Empresa",
    },
  });

  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "Administrador",
      password: "cambiar-esta-clave",
      telefono: "00000000",
      role: "ADMIN",
      tenantId: tenant.id,
    },
  });

  console.log("Seeder ejecutado correctamente.");
}

main()
  .catch((error) => {
    console.error("Error al ejecutar el seeder:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
