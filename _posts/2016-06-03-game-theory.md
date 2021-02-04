---
layout: post
title: "博弈与社会概要"
subtitle: "Game Theory and Society"
author: "Tori"
mathjax: true
header-style: text
tags:
- Miscellaneous
---

这篇是博弈与社会课程的简略概要，数学部分几乎被省略到没有，领会下预习精神。

### Chapter 1: 个人理性与社会合作

人类的生存和进步来自合作。**合作问题的核心是激励**，使得自利的人能够做出对集体最优的选择。

人类之所以合作是因为有理性，但是理性本身存在冲突（个人理性与集体理性）。为了解决个人理性与集体理性的矛盾，人们建立了各种各样的制度（游戏规则）。

**博弈论**是有关互动行为（interactive behavior）的科学。

**博弈论的基本假设**

- 工具理性假设（Instrumental rationality）
- 共同知识（Common knowledge of rationality）
- 知道游戏规则（Know the rules of the game）

**帕累托（Pareto）最优：**一种状态称为 Pareto 最优或 Pareto 效率，如果不存在另一种状态能使得没有任何人的处境变坏的同时，至少有一个人的处境变好。即：除非损人就不可能利己。

法律通过责任的分配和惩罚规则的实施，将个人行为的外部成本内部化，作为一种激励机制，从而诱导个人去选择对社会最优的行动。

### Chapter 2: 纳什均衡与囚徒困境博弈

**本章主要内容：博弈论基本概念、完全信息静态博弈的纳什均衡概念**

**博弈论的基本概念：**参与人、行动、信息、战略、支付、均衡、结果

**博弈的分类**

- 维度一：静态博弈／动态博弈
- 维度二：完全信息／不完全信息

**占优均衡（dominant equilibrium）：**一个最优战略被称为占优战略，如果其中一个人的最优选择不依赖于其他人的选择。由所有参与人的占优战略构成的战略组合称为占优均衡。

**重复剔除占优均衡（Iterated dominance equilibrium）：**通过不断剔除劣战略所得到的最后唯一的战略组合称为重复剔除占优均衡。若这样的均衡存在，则称这个博弈是重复剔除占优可解的。

**纳什均衡（Nash equilibrium）：**所有参与人的最优战略的组合，且给定这一组合中其他参与人的选择，没有任何人有积极性改变自己的选择。

在纳什均衡中，如果给定每个人对其他人的选择的信念，那么他们做出的选择恰好就是纳什均衡中的自己的战略，达成了**信念与选择的一致性**。

**寡头竞争：Cournot 博弈**

- 两个企业同时选择产量，价格由市场决定。
- 假定需求函数 P(Q) = a - (q1 + q2)，q1、q2 分别为企业一和企业二的产量，成本函数 C(qi) = c * qi，那么利润函数 Si = qi * P(Q) - c * qi = qi * (a - q1 - q2 - c)
- 令 dSi / dqi = 0，可解得 qi = (a - c) / 2 - qi’ / 2
- 所以纳什均衡时的产量 q1 = q2 = (a - c) / 3，利润 S1 = S2 = (a - c)^2 / 9

**混合战略纳什均衡：**有些博弈没有纯战略纳什均衡，但是存在混合战略纳什均衡，即以一定概率选择不同的战略。

### Chapter 3: 多重均衡与制度文化

**本章主要内容：完全信息静态博弈中的多重纳什均衡**

**多重纳什均衡（Multiple Nash equilibrium）**：博弈中可能有多个纳什均衡，如交通博弈，均靠左走和均靠右走都是纳什均衡。

对于多重纳什均衡，仅仅理性是不够的，还需要**协调预期达成预期的一致性**。

**聚点均衡（Focal point, Schelling, 1960）**是在多重纳什均衡中人们预期最可能出现的均衡（最符合普通人的行为习惯）。文化、环境等社会因素可导致聚点均衡的实现。

**对存在唯一帕累托最优均衡的博弈**，如果选择风险较小，那么通过**无成本交流（cheap talk）**容易达成预期的一致性。无成本交流只有当双方不存在严重利益冲突时才有效。

**锁定效应与路径依赖：**如果初始的非帕累托最优被锁定（比如某种社会原因，或者达成另一种协议的成本很高），将会导致路径依赖（path dependence），即初始的选择决定了未来的选择，最终整个社会被锁定在非帕累托最优状态。

**对不存在唯一帕累托最优均衡的博弈**，可以用**制度（法律和社会规范）**来协调预期，例如交通规则的演变、统一度量衡等。

信息对预期的协调很重要，而身份是传递信息的重要工具，以帮助人们协调预期。制度需要稳定性，频繁的制度变化很难让人们形成一致的预期。

### Chapter 4: 威胁与承诺

**本章主要内容：完全信息动态博弈中的精炼纳什均衡概念**

**动态博弈（Dynamic game）**：参与人的行动有先后顺序，先行动者的选择影响后行动者的选择，后行动者可以观察到先行动者的选择，如下棋。

**不可置信的威胁（Non-credible threat）**：一种战略的行动在事前看来是最优，但事后看并不是最优选择，那么这样的行动就不可置信。

**精炼纳什均衡（Perfect Nash equilibrium）**：不包含不可置信的行动的战略所组成的纳什均衡，即不论发生什么，精炼纳什均衡战略中的行动在每一个决策点上都是最优。

**逆向归纳法（Backward induction）**：在有限博弈中，从最后一个决策点开始找到该子博弈的纳什均衡，再返回倒数第二个决策点找到相应子博弈的纳什均衡，直到回到起始决策点为止。

**Stackelberg 寡头竞争模型：Leader-follower model**

- 设先行动者的效用为 u1(q1, q2)，后行动者的效用 u2(q1, q2)，那么 q1 的选择应该满足 max u1(q1, q2) s.t. max u2(q1, q2)，即先通过 max u2(q1, q2) 解出 q2 = q2(q1) 代入 u1(q1, q2) 化为 q1 的单变量函数，再将其最大化。
- 若沿用前述 Cournot 竞争模型的情境，可解得 q1* = (a - c) / 2 > (a - c) / 3，q2* = (a - c) / 4 < (a - c) / 3，先行动者存在优势。

**承诺（Commitment）：**将不可置信的威胁变成可置信的威胁的行动，使威胁不仅事前最优，同时也是事后最优。承诺是需要花费成本的。

法律改变事后的选择空间或选择成本，可以起到承诺的作用。**有限政府（Limited government）**：政府不仅要保护个人的基本权利不受其他人的侵犯，而且要把尊重这些权利作为对政府行为的限制。

### Chapter 5: 讨价还价与耐心

**本章主要内容：一类特殊的完全信息动态博弈问题——讨价还价问题**

**讨价还价问题（Bargaining）**：既存在共同利益，也存在利益冲突，是合作与竞争的结合，属于非零和博弈（即博弈各方的收益和损失的总和不总为 0），属于合作博弈。

**研究讨价还价问题的两种思路：**

- 合作博弈方法（Cooperative game approach）：**所有参与人联合决策**，协议对双方都具有约束力，强调集体理性。
- 非合作博弈方法（Non-cooperative game approach）：**每个参与人独立决策**，协议是一个纳什均衡，没有约束力，强调个人理性。

**合作博弈下的讨价还价问题：纳什谈判解（Nash bargaining solution）**

- 纳什谈判解的公理化：
  - 1) Pareto efficiency
  - 2) Invariance of linear transformation
  - 3) Independence of irrelevant alternatives
- 那么讨价还价的唯一结果：max (x - a) (y - b) s.t. x + y = V(x, y)，其中 V(x, y) 为总价值，a、b 是不达成协议时双方获得的价值，称为威胁点，函数 W(x, y) = (x - a) (y - b) 称为纳什福利函数（Nash welfare function）。

**非合作博弈下的讨价还价问题：动态博弈问题**

- 模型：轮流出价谈判，精炼纳什均衡唯一
- 1）没有固定谈判成本
  - 有限期谈判有后动优势（利用逆向归纳法）
  - 无限期谈判具有先动优势（利用方程大法好）
- 2）存在固定谈判成本
  - 当谈判成本不同时，成本较大的一方在谈判中处于劣势

**为什么现实中的谈判不在一开始就达成协议，实现精炼纳什均衡？**

- 原因：信息不完全
- 谈判的过程实际上是信息揭示和窥探的过程。信息优势决定谈判中的地位。

### Chapter 6: 重复博弈与合作行为

**本章主要内容：最为重要的一类动态博弈——重复博弈（完全信息）**

重复博弈与序贯博弈的区别

- 序贯博弈：同样结构的子博弈只出现一次
- 重复博弈：同样结构的子博弈出现多次

在**囚徒困境**中，一次博弈的唯一均衡是不合作，但如果博弈无限重复，合作就可能出现。囚徒困境重复博弈可选择的策略的例子：

- 总不合作（All-D）／总合作（All-C）
- 合作－不合作交替
- **Tit-for-tat（针锋相对）**：从合作开始，之后每次选择对方前一阶段的行动
- Trigger strategy（触发战略）：从合作开始，直到对方不合作，之后永不合作

双方都选择 TFT 战略是一个纳什均衡，但不是精炼纳什均衡。**事实上，在现实生活中，TFT 是成功率最高的战略。**

**欺骗行为越难以被发现，即信息的传递越滞后，合作越困难。**

**合作的条件：**

1. 重复博弈
2. 参与人有足够的耐心／相对确定的环境／博弈重复的概率足够大（即贴现因子）
3. 欺骗行为能被及时观察到（信息）
4. 惩罚是可置信的威胁

在重复博弈中，当参与人不固定的时候，惩罚需要由第三方实施，而问题在于第三方实施惩罚可能需要付出成本，或者失去合作机会等。第三方实施惩罚的积极性问题就被称为**二阶囚徒困境（second-order prisoners’ dilemma）。**

### Chapter 7: 不完全信息与声誉

**本章主要内容：不完全信息博弈**

有限次重复博弈中的合作问题：多重均衡或不完全信息

**一、多重均衡下的合作问题**

多个纳什均衡的存在使得重复博弈中对不合作行为的惩罚措施增加了。

如果阶段博弈中的多重纳什均衡之间不存在帕累托优劣问题，那么惩罚就会变得可信。

如果博弈中可信的惩罚措施足够多，重复博弈中就可能出现一次性博弈中不会出现的合作行为，即使博弈重复的次数是有限的。

**二、不完全信息情况下的有限重复博弈**

KMRW 定理：在不完全信息的情况下，只要博弈重复的次数足够多，每个人有足够的耐心，参与人就有积极性在博弈的早期建立一个合作的声誉，一直到博弈的后期才会选择背叛；并且，非合作阶段只与对方理性的概率 p 有关，而和博弈的总次数 T 无关。

**声誉的积累——贝叶斯法则**

以下用 θ0 表示好人，θ1 表示坏人，good 表示做好事，bad 表示做坏事。假设 A 认为 B 是好人的先验概率是 p(θ0)，现在观察到 B 做了一件好事，那么 A 认为 B 是好人的后验概率 p(θ0 \| good) = p(good \| θ0) p(θ0) / p(good) = p(good \| θ0) p(θ0) / ( p(good \| θ0) p(θ0) + p(good \| θ1) p(θ1) )。

### Chapter 8: 逆向选择与品牌 和 政府管制

**本章主要内容：事前非对称信息导致的逆向选择**

交易中一方知道而另一方不知道的信息称为**非对称信息（asymmetric information）**。事前的信息不对称导致逆向选择（本章），事后的信息不对称导致道德风险（第11章）。

由于信息不对称导致的“劣胜优汰”现象称为**逆向选择**。

真乞丐之所以得不到施舍，不是因为人们没有同情心，而是因为信息不对称。

**解决非对称信息的市场机制：**

1. 直接获取：处于信息劣势的一方自己收集信息
2. 直接提供：专业化的信息提供商收集和传递信息
3. 间接获取：“信息甄别”或“机制设计”，指信息劣势一方设计激励方案使信息优势一方说实话（见第10章）
4. 间接提供：“信号显示”或“信号传递”，指信息优势一方通过耗费成本向信息劣势一方传递真实信息（见第9章）
5. 声誉机制：建立品牌，信息越不对称，品牌价值越大。品牌价值与行业、技术进步、收入水平等有关。

**解决非对称信息的非市场机制：政府管制**

政府与市场之间的博弈——政府管制和市场信誉的关系

对政府而言，市场信誉越好，政府需要的管制越弱，市场信誉越坏，政府需要的管制就越强。

对市场而言，在管制较小的范围内，管制越强，市场信誉越好（环境稳定、违约行为能被及时观察，惩罚可信），但当政府管制过强时，市场信誉反而会随管制增强而变坏（政府行为的不确定性、垄断使惩罚不可信、政府腐败）。

当管制与信誉的政府曲线和市场曲线不存在交点（纳什均衡点）时，就会出现恶性循环，市场混乱不堪。

### Chapter 9: 信号传递与社会规范

**本章主要内容：解决非对称信息的途径之一——信号传递**

**信号传递的一般模型：不完全信息的动态博弈**

A 知道自己的类型，而 B 认为 A 属于类型 1 的概率为 p，属于类型 2 的概率为 1-p，B 可以通过观察 A 传递的信号根据贝叶斯法则修正对 A 的类型的判断，即该博弈的过程不仅是参与人选择行动的过程，也是信念的修正过程。

**以二手车交易为例，**假定无论好车坏车队卖家的价值都是 v\_sell，对买家的价值都是 v\_buy，好车出故障的概率为 Q，坏车出故障的概率为 q（q > Q），汽车的修理成本为 C，不提供保修的汽车出售价格为 p，提供保修的出售价格为 P，那么：

**保修成为传递汽车质量好坏的信号的条件为：（激励相容约束）**好车有积极性提供保修，即 P - p >= QC，坏车没有积极性提供保修，即 P - p < qC。

**要使得交易成功，还需要条件：（理性参与约束）**卖主愿意出售，并且买主愿意购买，即 P - QC > v\_sell 且 P <= v\_buy（好车）；p > v\_sell 且 p <= v\_buy（坏车）。

激励相容约束的条件不等式 QC <= P - p < qC 建立了一个**分离均衡（separating equilibrium）**，能够把不同质量的产品分离开来。如果出现条件 QC <= P - p 和 qC <= P - p，那么就出现了**混同均衡（pooling equilibrium）**，信号无法得到成功传递。

**分离均衡条件**表明：在信息不对称条件下若要成功传递信号，不同质量产品的价格之间应有适当的差距，不能过低（好车不愿意保修）也不能过高（坏车也提供保修）。

**社会规范的信号传递功能：**如送礼，重要的是礼物对送礼人的成本大小，而不是对收礼人的价值多少。一个信息相对透明的社会才有可能有效地重塑价值观念和社会规范。

### Chapter 10: 机制设计与收入分配

**本章主要内容：解决非对称信息的途径之二——机制设计**

**机制设计（mechanism design）**理论研究在信息不对称的情况下，信息劣势一方如何让信息优势一方把信息真实地披露出来。机制可分为直接显示机制（信息优势一方直接报告类型）和间接显示机制（信息劣势一方为信息优势一方设计方案，通过其选择来判断类型）。

**价格歧视（price discrimination）**指厂家向不同消费者出售同类产品时，不同消费者支付的价格差异大于生产成本的差异，目的是作为一种机制区分不同类型的消费者。

**两部收费制（two-part tariff）**：一种价格歧视。与完全价格歧视比有两个特点：（1）低需求者的消费小于社会最优水平；（2）高需求者获得消费者剩余，称为信息租金。

在信息不对称的情况下，为了让人说真话，信息优势一方必须获得足够高的**信息租金**。

**拍卖机制设计的四种基本方式：**

- 英国式拍卖：价格从低到高，直到仅一人接受价格为止
- 荷兰式拍卖：价格从高到低，直到有一人接受价格为止
- 高价格密封拍卖：竞价者将出价封入信封，最后全部打开，出价最高的竞价者胜出
- **次价格密封拍卖**（也称 Vickery 拍卖机制）：基本与高价格密封拍卖相同，但胜出者支付第二最高报价。在这个机制下，**所有人都有积极性说真话**。

**次价格密封拍卖机制在公共产品偏好显示中的应用：**Groves-Clarke-Vickery 机制——每个人可以任意地报告自己的偏好，但可能要纳缴一定数量的税。税的计算方法为：先将其他人的偏好加总，给出总价值最大的项目；然后将第 k 个人的偏好加上，如果不影响结果，不征税；否则应纳税等于改变结果给其他人带来的损失。

**平等与效率的矛盾来自信息的不对称。**莫里斯最优收入税理论证明了由于信息不对称，最高收入的边际税率应该等于 0。

### Chapter 11: 道德风险与腐败

**本章主要内容：事后非对称信息导致的腐败**

**腐败的根源：事后的信息不对称**

**腐败问题的委托—代理模型：**经济学上，若有一方的行为影响了另一方的利益，那么就存在委托代理关系。当信息不对称时，信息优势一方称为代理人，信息劣势一方称为委托人。

**委托代理问题的成因：**利益冲突；信息不对称；风险态度；有限责任能力

**激励机制的设计（数学略过）：**最优激励合同依赖于可观察到的信息

**效率工资理论：**如果不能监督，就必须“贿赂”。这里“贿赂”指的是一种激励，使得代理人没有积极性做坏事。

**腐败的治理**：提高工资（高薪养廉）；加强监督；削减官员权力（治本）；加大处罚力度，通过道德教育提高脸皮系数（-_-#）。

### Chapter 12: 演化博弈与自发秩序

**本章主要内容：演化博弈理论与演化稳定均衡**

**演化稳定战略（evolutionary stable strategy, ESS）**：一种战略被称为演化稳定，如果它能击败任何变异，持续存在并不断自我复制。ESS 必然是纳什均衡，但反之不然。

**演化稳定均衡可分为单元均衡和多元均衡**，前者中只有一种战略可以在均衡状态下存在，而后者可以有多种战略并存。如交通博弈中，“都靠左”和“都靠右”是多重纳什均衡，但只有“人人都靠左”或者“人人都靠右”才是演化稳定均衡，是单元均衡。演化稳定均衡不一定是 Pareto 最优的，因而可能出现**路径依赖现象**。

对于演化稳定均衡，称之为**强稳定**，如果变异入侵之后会被完全消灭（例如两次囚徒困境博弈的 TFT 社会中的 All-D 变异）；称之为**弱稳定**，如果变异入侵之后各类人口比例维持不变（例如两次囚徒困境博弈的 TFT 社会中的 All-C 变异和 TF2T 变异等）。

自发秩序与产权制度：演化稳定的惯例形成规范

### Chapter 13/14: 法律、制度企业家与社会规范

**法律和社会规范的基本功能：**激励机制、协调预期、信号传递机制

**影响法律和社会规范相对有效性的因素：**社会规模、私人执行成本、信息流动速度、社会变革速度、社会分权

称创造和改变社会游戏规则的人物为**制度企业家**。人类文明的轴心时代（公元前六世纪开始的 500 年左右）出现了世界史上一些最伟大的思想家，提倡以人为本、推己及人、互助相爱、诚实守信、奖善惩恶。

**儒家社会规范：**作为社会规范和法律的礼；协调预期和定分止争功能；作为激励机制的等级制度。儒家更接近自然法的精神，而不是法家的实证法。