# 📇 DevCard - Cartão de Visita Digital

O **DevCard** é um aplicativo mobile desenvolvido para a atividade prática da disciplina de Aplicações Móveis. O objetivo do projeto é criar um cartão de visita digital personalizado para desenvolvedores, exercitando conceitos fundamentais de React Native e navegação moderna com Expo Router.

---

## 🚀 Funcionalidades

O fluxo do aplicativo foi projetado para ser intuitivo e funcional:

1. **Boas-vindas**  
   Tela inicial de apresentação do app.

2. **Cadastro**  
   Formulário dinâmico com validação de dados para coleta de informações profissionais.

3. **Preview do Cartão**  
   Renderização estilizada do cartão de visita com lógica condicional de cores e níveis de experiência.

4. **Sucesso**  
   Tela de confirmação após a finalização do processo.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **React Native** — Framework para desenvolvimento mobile.
- **Expo Router** — Sistema de roteamento baseado em arquivos (*File-based routing*).
- **TypeScript** — Tipagem estática para maior segurança e produtividade.
- **Flexbox** — Metodologia de alinhamento e distribuição de componentes.

---

## 📂 Estrutura do Projeto

Seguindo o padrão de roteamento do Expo Router, a estrutura de pastas está organizada da seguinte forma:

```text
projeto-devcard/
├── app.json
├── package.json
└── src/
    └── app/
        ├── _layout.tsx    # Gerenciador de rotas e pilhas
        ├── index.tsx      # Tela de Boas-vindas (Rota Inicial)
        ├── cadastro.tsx   # Formulário de entrada de dados
        ├── preview.tsx    # Renderização e lógica do cartão
        └── sucesso.tsx    # Confirmação final
```

---

## 🧠 Lógica de Negócio (Regras de Avaliação)

O projeto implementa regras específicas de UI e lógica solicitadas:

### ✅ Validação de Formulário
Impede o avanço se:

- Campos obrigatórios estiverem vazios.
- O nome tiver menos de 3 caracteres.

### 👨‍💻 Lógica de Senioridade

O nível do desenvolvedor é calculado automaticamente com base nos anos de experiência:

| Nível | Experiência |
|---|---|
| 🟢 Júnior | Menos de 3 anos |
| 🟡 Pleno | Entre 3 e 5 anos |
| 🔴 Sênior | Mais de 5 anos |

### 🎨 Customização Dinâmica

O cartão altera sua cor de fundo dinamicamente entre:

- 🔵 Azul
- 🟢 Verde
- 🟣 Roxo

Conforme a escolha do usuário no cadastro.

---

## 🔧 Como Rodar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Inicie o Expo

```bash
npx expo start
```

### 4️⃣ Execute no dispositivo

- Para **Android**: pressione `a` no terminal.
- Para **Web**: pressione `w` no terminal.
- Ou escaneie o **QR Code** utilizando o aplicativo **Expo Go**.

---

## 📱 Demonstração

| Boas-Vindas | Cadastro | Preview |
|---|---|---|
| <img src="./assets/screenshots/Google-Pixel-6-PRO-localhost (1).png" width="200" /> | <img src="./assets/screenshots/Google-Pixel-6-PRO-localhost (2).png" width="200" /> | <img src="./assets/screenshots/Google-Pixel-6-PRO-localhost (3).png" width="200" /> |

---

## 🎯 Objetivos de Aprendizagem

Este projeto teve como foco praticar:

- Navegação com Expo Router
- Manipulação de estados
- Componentização
- Validação de formulários
- Estilização com Flexbox
- Passagem de parâmetros entre telas
- Desenvolvimento mobile com React Native

---

## 🧑‍💻 Autor

Desenvolvido por **João Elias**  
🎓 Estudante de Sistemas de Informação — 2026

> “Aplicações Movem o Mundo”

📚 Atividade Prática 7 — Prof. Brendo Vale
