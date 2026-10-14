# PRD: Jogo Casual de Adivinhacao de Palavras

**Status:** rascunho para validacao  
**Plataforma inicial:** navegador  
**Idioma:** portugues do Brasil

## 1. Visao do produto

Um jogo casual de deducao de palavras para adolescentes e jovens adultos. Em cada desafio, a pessoa tenta descobrir seis palavras simultaneamente, com palpites independentes para cada palavra. Ha ate dez desafios diarios, todos disponiveis desde o inicio, e modos de dificuldade para acomodar diferentes niveis de experiencia.

O jogo deve ser facil de iniciar, legivel em telas pequenas, acessivel por diferentes formas de interacao e gratuito, sem anuncios ou compras.

## 2. Publico e necessidade

- Publico principal: pessoas de 13 a 17 anos.
- Publico secundario: pessoas de 18 a 25 anos.
- Necessidade: jogar uma experiencia curta de raciocinio com palavras, progresso pessoal e desafios renovados diariamente.
- Contexto: uso individual em navegador, principalmente em celular, mas tambem em computador.

## 3. Objetivos

- Oferecer desafios diarios claros e rejogaveis, sem exigir cadastro.
- Tornar a deducao de letras e posicoes compreensivel desde a primeira partida.
- Permitir que cada pessoa ajuste o desafio por modo de dificuldade e use dicas limitadas.
- Registrar progresso e resultados sem coletar dados pessoais desnecessarios.
- Atender WCAG 2.2 nivel AA como objetivo de acessibilidade.

## 4. Fora do escopo inicial

- Multiplayer, chat, rankings publicos ou feed social.
- Aplicativos nativos para iOS ou Android.
- Anuncios, compras no aplicativo, assinatura ou mecanismos pagos de vantagem.
- Cadastro obrigatorio e sincronizacao de progresso entre dispositivos.
- Conteudo criado livremente por usuarios.

## 5. Loop principal

1. A pessoa abre o jogo e escolhe um dos desafios diarios disponiveis.
2. Escolhe um modo de dificuldade.
3. Ve seis tabuleiros de palavras simultaneamente.
4. Seleciona um tabuleiro, digita um palpite valido e recebe feedback sobre letras e posicoes.
5. Repete ate resolver a palavra ou esgotar as tentativas daquele tabuleiro.
6. Continua com os outros tabuleiros. Cada palavra tem palpites, dicas e limite de erros independentes.
7. Ao terminar o desafio, ve o resultado, as palavras reveladas e atualiza seu progresso.

Resolver ou perder uma palavra nao encerra as outras. Os desafios seguintes permanecem acessiveis, mesmo que a pessoa nao tenha concluido o anterior.

## 6. Regras e configuracao recomendada

### Desafios diarios

- Disponibilizar ate dez desafios por dia, todos desde o inicio.
- Cada desafio contem seis palavras-alvo, apresentadas ao mesmo tempo em tabuleiros separados.
- Cada tabuleiro recebe palpites independentes; um palpite em uma palavra nao e aplicado as outras.
- A selecao diaria e igual para todas as pessoas no mesmo dia e modo, para que o desafio seja comparavel.
- A virada diaria usa o fuso `America/Sao_Paulo`. O calendario deve manter o mesmo desafio durante o dia, inclusive entre recargas da pagina.

### Dificuldade

Recomendacao inicial, sujeita a teste de usabilidade e ajuste de equilibrio:

| Modo | Tamanho da palavra | Tentativas por palavra | Dicas por palavra |
| --- | ---: | ---: | ---: |
| Facil | 4 letras | 8 | 3 |
| Normal | 5 letras | 7 | 2 |
| Dificil | 6 letras | 6 | 1 |

- A dificuldade tambem deve considerar familiaridade e ambiguidade do vocabulario, nao apenas o tamanho.
- Os modos nao devem depender de cronometro.
- A pessoa pode escolher o modo para cada desafio. Estatisticas devem ser separadas por modo, evitando comparacoes injustas.

### Palpites e feedback

- A resposta deve ser uma palavra valida conforme o vocabulario curado para o modo.
- Letras na posicao correta recebem um estado visual e textual de acerto exato; letras presentes em outra posicao recebem estado de acerto parcial; letras ausentes recebem estado de ausencia.
- O feedback nao pode depender apenas de cor. Usar tambem simbolos, padroes ou rotulos acessiveis.
- Repeticoes de letras devem ser avaliadas pela quantidade existente na resposta, sem marcar ocorrencias excedentes como corretas.
- Uma palavra invalida nao consome tentativa e deve receber uma mensagem clara.
- Ao vencer ou esgotar tentativas, o tabuleiro bloqueia novos palpites e revela o resultado.

### Dicas

- Dicas sao opcionais e limitadas por palavra conforme a tabela de dificuldade.
- Recomendacao: a dica revela uma informacao util sem entregar diretamente a resposta, por exemplo uma letra ainda nao revelada ou uma definicao curta.
- Usar dicas reduz a pontuacao de desempenho, mas nunca bloqueia progresso, conquista basica ou acesso a outro desafio.

## 7. Vocabulario e portugues do Brasil

- Manter listas distintas para respostas e palpites aceitos; as respostas devem ser mais restritas e revisadas.
- Priorizar palavras reconheciveis pelo publico, adequadas a faixa etaria e sem ambiguidades desnecessarias.
- Seguir a ortografia vigente do portugues do Brasil, incluindo acentos e cedilha.
- Recomendacao para entrada: aceitar versoes sem acento quando nao houver ambiguidade entre respostas possiveis; exibir sempre a grafia oficial. Evitar que palavras diferentes se tornem indistinguiveis apos a normalizacao.
- Excluir nomes proprios, abreviacoes, termos ofensivos e respostas excessivamente regionais ou tecnicas do conjunto diario, salvo em um modo tematico claramente identificado.
- Exibir a definicao da resposta apos a conclusao da palavra, como opcao de aprendizado sem interromper o jogo.
- Toda lista de respostas deve passar por revisao editorial e teste de dificuldade com falantes brasileiros de diferentes regioes.

## 8. Progresso e motivacao

Incluir no produto, conforme a resposta de descoberta:

- Sequencia de dias jogados, com reinicio apos dia perdido e sem penalidade adicional.
- Estatisticas gerais e por modo: desafios iniciados/concluidos, palavras resolvidas, tentativas usadas e dicas utilizadas.
- Historico de resultados diarios, sem revelar respostas futuras.
- Niveis pessoais baseados em atividade e conquistas por marcos de jogo.
- Progresso salvo automaticamente no navegador.

Recomendacao: manter a apresentacao de sequencias e conquistas positiva, sem notificacoes insistentes, punicoes ou linguagem que induza culpa.

## 9. Acessibilidade e experiencia

- Buscar conformidade WCAG 2.2 AA: contraste minimo de 4,5:1 para texto comum, foco visivel, operacao completa por teclado e alvos de toque com pelo menos 24 x 24 CSS px ou espacamento equivalente.
- Oferecer comunicacao de estados por texto e simbolos, alem de cor.
- Dar suporte a leitores de tela, ampliacao, zoom, orientacao de foco previsivel e preferencia por movimento reduzido.
- Permitir inserir palpites por teclado fisico e teclado virtual do jogo; manter controles de toque confortaveis.
- Usar layout responsivo. Em telas pequenas, manter visiveis os estados dos seis tabuleiros e permitir selecionar cada um sem perder contexto.
- Nao usar limite de tempo para palpites.
- Testar com leitores de tela, navegacao apenas por teclado, daltonismo e diferentes tamanhos de tela.

## 10. Privacidade e seguranca

- Nao exigir conta, nome, data de nascimento, e-mail, localizacao ou perfil social.
- Salvar progresso localmente no navegador. Informar que limpar os dados do navegador pode apagar o historico; sincronizacao entre dispositivos fica fora do MVP.
- Nao incluir anuncios, rastreadores publicitarios, chat ou conteudo de usuarios no MVP.
- Coletar apenas dados tecnicos estritamente necessarios para funcionamento e protecao do servico. Qualquer analitica deve ser agregada, minimizada e submetida a revisao de privacidade antes do lancamento.
- Como parte do publico tem menos de 18 anos, validar fluxos, avisos e tratamento de dados com revisao juridica adequada a LGPD e ao melhor interesse de criancas e adolescentes.

## 11. Requisitos funcionais

- **RF-01:** A pagina inicial apresenta os desafios do dia e os modos de dificuldade.
- **RF-02:** A pessoa consegue iniciar qualquer um dos ate dez desafios diarios sem desbloquear os anteriores.
- **RF-03:** Cada desafio apresenta seis palavras simultaneamente e permite selecionar cada tabuleiro.
- **RF-04:** Cada palavra possui tentativas e dicas independentes, de acordo com o modo escolhido.
- **RF-05:** O sistema valida palpites, calcula feedback por letra e posicao e lida corretamente com letras repetidas.
- **RF-06:** O sistema rejeita palavras fora da lista de palpites sem descontar tentativa.
- **RF-07:** O sistema encerra cada tabuleiro individualmente e encerra o desafio quando os seis tabuleiros terminarem.
- **RF-08:** O resultado mostra palavras reveladas, tentativas, dicas e resumo do desafio.
- **RF-09:** Estatisticas, historico, niveis, conquistas e sequencia diaria persistem entre sessoes no mesmo navegador.
- **RF-10:** A pessoa pode usar todas as funcionalidades principais com toque, teclado e tecnologia assistiva.

## 12. Requisitos nao funcionais

- Funcionar nas versoes atuais dos principais navegadores desktop e mobile.
- Ser responsivo e utilizavel em telas estreitas sem rolagem horizontal da pagina.
- Carregar a interface de jogo rapidamente em conexao movel comum; meta inicial recomendada: primeira interacao em ate 3 segundos no percentil 75, a validar em teste.
- Manter desafios diarios consistentes apos recarregar a pagina e entre dispositivos, caso a arquitetura futura inclua sincronizacao.
- Nao depender de animacao para comunicar feedback; respeitar configuracao de movimento reduzido.

## 13. Indicadores de sucesso

Instrumentar apenas apos revisao de privacidade. Validar inicialmente com testes moderados e um beta pequeno.

- Ativacao: percentual de pessoas novas que iniciam e concluem pelo menos uma palavra.
- Conclusao: percentual de desafios iniciados que terminam com os seis tabuleiros resolvidos ou encerrados.
- Retorno: pessoas que voltam no dia seguinte e na semana seguinte, medido de forma agregada.
- Qualidade: taxa de palavras invalidas, uso de dicas, abandono por desafio e dificuldade percebida por modo.
- Acessibilidade: tarefas principais concluidas em testes com teclado, leitor de tela e mobile.

Metas numericas de retencao e conclusao ficam pendentes de dados de beta; nao assumir benchmarks externos como garantia de sucesso.

## 14. Criterios de aceite do MVP

- Uma pessoa consegue iniciar qualquer desafio diario disponivel sem criar conta.
- Cada desafio mostra seis tabuleiros e aceita palpites separados para cada palavra.
- A resposta de uma palavra nao altera o estado dos outros tabuleiros.
- Os tres modos aplicam tamanho, tentativas e dicas conforme a configuracao publicada.
- Tentativas, dicas, respostas e progresso continuam consistentes ao recarregar a pagina.
- A mesma pessoa nao recebe novos alvos no mesmo dia ao atualizar a pagina.
- O jogo e concluivel sem distinguir cores e sem usar mouse ou toque.
- Nao ha anuncios, compras, chat ou solicitacao de dados pessoais no fluxo de jogo.

## 15. Riscos e validacoes pendentes

- **Carga de jogo:** dez desafios com seis palavras cada podem resultar em ate 60 palavras por dia. Validar em prototipo se a quantidade e a interface continuam casuais; considerar medir quantos desafios sao iniciados e concluidos, sem reduzir a disponibilidade definida.
- **Dificuldade:** seis tabuleiros simultaneos podem ser exigentes, mesmo no modo facil. Fazer testes com participantes de 13–17 e 18–25 anos separadamente.
- **Interface mobile:** seis tabuleiros completos podem ficar pequenos. Testar uma visao geral com tabuleiro selecionado ampliado, preservando o estado dos demais.
- **Conteudo lexical:** revisar lista, acentuacao, regionalismos, palavras ambiguas e sensibilidade cultural com falantes brasileiros.
- **Privacidade de menores:** realizar revisao juridica e de protecao de dados antes de publicar, especialmente se forem adicionadas contas, sincronizacao ou analitica.
- **Nome e identidade:** escolher nome original e verificar disponibilidade antes de lancamento; nao copiar marca, textos, listas de respostas ou identidade visual de outros jogos.

## 16. Fontes de pesquisa

- [G1: Wordle e Termo, formato e contexto brasileiro](https://g1.globo.com/pop-arte/games/noticia/2022/01/19/wordle-e-termo-historia-de-amor-se-transformou-em-jogo-de-palavras-que-e-sensacao-em-2022.ghtml)
- [Guardian: simplicidade, partida curta e cadencia diaria do Wordle](https://www.theguardian.com/games/2022/jan/08/wordle-review-josh-wardle-free-word-guessing-game-simplicity-works-like-a-charm)
- [Estudo: vieses semanticos, ortograficos e fonologicos em palpites humanos](https://arxiv.org/abs/2411.18634)
- [Estudo: fatores associados a dificuldade das palavras](https://arxiv.org/abs/2305.03502)
- [WCAG 2.2: contraste minimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [WCAG 2.2: operacao por teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
- [WCAG 2.2: tamanho minimo de alvos](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)