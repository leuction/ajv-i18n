'use strict';

/**
 * When adding new locales, please maintain alphabetic ordering.
 * "en" should remain in the first position.
 * Tests will be failing otherwise.
 */

module.exports = {
  // supported locales
  _locales: ['en', 'ar', 'cz', 'de', 'es', 'fr', 'hu', 'it', 'ja', 'no', 'pl', 'pt-BR', 'ru', 'sk', 'sv', 'zh'],

  // shared defines
  _defs: {
    n: '{{var n = e.params.limit;}}',
    mPlural: { // plural for the words item (element) and character
      en: '{{? n!=1 }}s{{?}}',
      ar: '{{? n!=1 }}عناصر{{?}}',
      cz: '{{? n==1 }}ek{{??}}ků{{?}}',
      de: '{{? n!=1 }}e{{?}}',
      es: '{{? n!=1 }}s{{?}}', //only item (element)
      fr: '{{? n!=1 }}s{{?}}',
      it: '{{? n==1 }}o{{??}}i{{?}}',
      no: '{{? n!=1 }}er{{?}}',
      pl: '{{? n==1 }}u{{??}}ów{{?}}',
      'pt-BR': '{{? n!=1 }}s{{?}}',
      ru: '{{? n>=2 && n<=4 }}а{{?? n!=1 }}ов{{?}}',
      sk: '{{? n==1 }}ok{{??}}kov{{?}}',
      sv: '{{? n!=1 }}er{{?}}'
    },
    propPlural: { // plural for the word property (attribute)
      en: '{{? n==1 }}y{{??}}ies{{?}}',
      ar: '{{? n!=1 }}خصائص{{?}}',
      cz: '{{? n>=2 && n<=4 }}ky{{?? n!=1 }}ek{{??}}ka{{?}}',
      de: '{{? n!=1 }}e{{?}}',
      es: '{{? n!=1 }}es{{?}}',
      fr: '{{? n!=1 }}s{{?}}',
      hu: '{{? n!=1 }}i{{?}}',
      it: '{{? n==1 }}o{{??}}i{{?}}',
      no: '{{? n==1 }}en{{??}}er{{?}}',
      pl: '{{? n==1 }}e{{??}}a{{?}}',
      'pt-BR': '{{? n!=1 }}s{{?}}',
      ru: '{{? n==1 }}е{{?? n>=2 && n<=4 }}я{{??}}ей{{?}}',
      sk: '{{? n>=2 && n<=4 }}ky{{?? n!=1 }}iek{{??}}ka{{?}}',
      sv: '{{? n!=1 }}er{{?}}'
    }
  },

  // error messages
  'false schema':  {
    en: 'boolean schema is false',
    ar: 'المخطط المنطقي غير صحيح',
    cz: 'schéma je false',
    de: 'boolsches Schema ist falsch',
    no: 'boolsk schema er usannt',
    ru: 'схема равна false',
    sk: 'schéma je false',
    sv: 'boolean schema är falskt'
  },
  $ref: {
    en: 'can\\\'t resolve reference {{=e.params.ref}}',
    ar: 'لا يمكن العثور على المرجع {{=e.params.ref}}',
    cz: 'reference {{=e.params.ref}} nenalezena',
    de: 'kann die Referenz {{=e.params.ref}} nicht auflösen',
    es: 'no se puede resolver la referencia {{=e.params.ref}}',
    fr: 'impossible d\\\'accéder à la référénce {{=e.params.ref}}',
    hu: 'nem sikerült feloldani a hivatkozást {{=e.params.ref}}',
    it: 'non può risolvere il riferimento {{=e.params.ref}}',
    ja: '{{=e.params.ref}}のスキーマを見つけることができない',
    no: 'kan ikke finne referansen {{=e.params.ref}}',
    pl: 'nie można znaleść schematu {{=e.params.ref}}',
    'pt-BR': 'Não é possível resolver a referência {{=e.params.ref}}',
    ru: 'не найдена схема {{=e.params.ref}}',
    sk: 'referenciu {{=e.params.ref}} sa nepodarilo nájsť',
    sv: 'kan inte lösa referens {{=e.params.ref}}',
    zh: '无法找到引用{{=e.params.ref}}'
  },
  additionalItems: {
    en: '{{#def.n}}should not have more than {{=n}} item{{#def.mPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أكثر من {{=n}} عنصر',
    cz: '{{#def.n}}nemůže mít víc, než {{=n}} prv{{#def.mPlural}}',
    de: '{{#def.n}}sollte nicht mehr als {{=n}} Element{{#def.mPlural}} enthalten',
    es: '{{#def.n}}no debe tener más de {{=n}} elemento{{#def.mPlural}}',
    fr: '{{#def.n}}ne doit pas contenir plus de {{=n}} élémént{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} eleme',
    it: '{{#def.n}}non dovrebbe avere più di {{=n}} element{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}以上あってはいけない',
    no: '{{#def.n}}kan ikke ha mer enn {{=n}} element{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć więcej niż {{=n}} element{{#def.mPlural}}',
    'pt-BR': 'Não são permitidos itens adicionais',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} элемент{{#def.mPlural}}',
    sk: '{{#def.n}}nemôže obsahovať viac, než {{=n}} prv{{#def.mPlural}}',
    sv: '{{#def.n}}borde ha fler än {{=n}} sak{{#def.mPlural}}',
    zh: '{{#def.n}}不允许超过{{=n}}个元素'
    // en: 'Additional items not allowed',
    // nb: 'Tillegselementer er ikke tillatt',
    // 'pt-PT': 'Não são permitidos itens adicionais',
  },
  additionalProperties: {
    en: 'should not have additional properties',
    ar: 'يجب أن لا يحوي خصائص إضافية',
    cz: 'nemůže mít další položky',
    de: 'sollte keine zusätzlichen Attribute haben',
    es: 'no debe tener propiedades adicionales',
    fr: 'ne doit pas contenir de propriétés additionnelles',
    hu: 'nem lehetnek további elemei',
    it: 'non dovrebbe avere attributi aggiuntive',
    ja: '追加してはいけない',
    no: 'kan ikke ha flere egenskaper',
    pl: 'nie powinien zawierać dodatkowych pól',
    'pt-BR': 'Não são permitidas propriedades adicionais',
    ru: 'не должно иметь дополнительные поля',
    sk: 'nemôže obsahovať ďalšie položky',
    sv: 'borde inte ha fler egenskaper',
    zh: '不允许有额外的属性'
    // en: 'Additional properties not allowed',
    // nb: 'Tilleggsvariabler er ikke tillatt',
    // 'pt-PT': 'Não são permitidas propriedades adicionais',
  },
  anyOf: {
    en: 'should match some schema in "anyOf"',
    ar: 'يجب أن يوافق أحد المخططات الموجودة في "anyOf"',
    cz: 'musí vyhovět alespoň jednomu schématu v "anyOf"',
    de: 'sollte einem der Schemata in "anyOf" entsprechen',
    es: 'debe coincidir con algún esquema en "anyOf"',
    fr: 'doit correspondre à un schéma de "anyOf"',
    hu: 'meg kell feleljen legalább egy "anyOf" alaknak',
    it: 'deve corrispondere qualche schema in "anyOf"',
    ja: '"anyOf"のスキーマとマッチしなくてはいけない',
    no: 'må samsvare med et schema i "anyOf"',
    pl: 'powinien pasować do wzoru z sekcji "anyOf"',
    'pt-BR': 'Os dados não correspondem a nenhum esquema de "anyOf"',
    ru: 'должно соответствовать одной их схем в "anyOf"',
    sk: 'musí splňovať aspoň jednu zo schém v "anyOf"',
    sv: 'borde matcha något schema i "anyOf"',
    zh: '数据应为 anyOf 所指定的其中一个'
    // en: 'Data does not match any schemas from "anyOf"',
    // nb: 'Data samsvarer ikke med noe skjema fra "anyOf"',
    // 'pt-PT': 'Os dados não correspondem a nenhum esquema de "anyOf"',
  },
  dependencies: {
    _defs: {
      n: '{{var n = e.params.depsCount;}}'
    },
    en: '{{#def.n}}should have propert{{#def.propPlural}} {{=e.params.deps}} when property {{=e.params.property}} is present',
    ar: '{{#def.n}} يجب أن يحوي الخصائص {{=e.params.deps}} عندما تكون الخاصية {{=e.params.property}} موجودة',
    cz: '{{#def.n}} musí mít polož{{#def.propPlural}}: {{=e.params.deps}}, pokud obsahuje {{=e.params.property}}',
    de: '{{#def.n}}sollte Attribut{{#def.propPlural}} {{=e.params.deps}} aufweisen, wenn Attribut {{=e.params.property}} gesetzt ist',
    es: '{{#def.n}}debe contener la{{#def.mPlural}} propiedad{{#def.propPlural}} {{=e.params.deps}} cuando la propiedad {{=e.params.property}} se encuentra presente',
    fr: '{{#def.n}}doit avoir la propriété {{=e.params.deps}} quand la propriété {{=e.params.property}} est présente',
    hu: '{{#def.n}}-nak kell legyen{{? n>1 }}ek{{?}} a következő tulajdonsága{{#def.propPlural}}: {{=e.params.deps}}, ha van {{=e.params.property}} tulajdonsága',
    it: '{{#def.n}}dovrebbe avere attribut{{#def.propPlural}} {{=e.params.deps}} quando attributo {{=e.params.property}} è presente',
    ja: '{{=e.params.property}}がある場合、{{#def.n}}は{{=e.params.deps}}をつけなければいけない',
    no: '{{#def.n}}må ha egenskapen{{? n != 1}}e{{?}} {{=e.params.deps}} når egenskapen {{=e.params.property}} er angitt',
    pl: '{{#def.n}}powinien zawierać pol{{#def.propPlural}} {{=e.params.deps}} kiedy pole {{=e.params.property}} jest obecne',
    'pt-BR': '{{#def.n}} deve ter propriedade{{#def.propPlural}} {{=e.params.deps}} quando a propriedade {{=e.params.property}} estiver presente',
    ru: '{{#def.n}}должно иметь пол{{? n==1 }}е{{??}}я{{?}} {{=e.params.deps}}, когда присутствует поле {{=e.params.property}}',
    sk: '{{#def.n}} musí obsahovať polož{{#def.propPlural}}: {{=e.params.deps}}, ak obsahuje {{=e.params.property}}',
    sv: '{{#def.n}}borde ha egenskap{{#def.propPlural}} {{=e.params.deps}} när egenskap {{=e.params.property}} finns tillgängligt',
    zh: '{{#def.n}}应当拥有属性{{=e.params.property}}的依赖属性{{=e.params.deps}}'
    // en: 'Dependency failed - key must exist: {missing} (due to key: {key})',
    // nb: 'Variabelen {missing} må være definert (på grunn av følgende variabel: {key})',
    // 'pt-PT': 'Uma dependência falhou - tem de existir uma chave: {missing} (devido à chave: {key})',
  },
  enum: {
    en: 'should be equal to one of predefined values',
    ar: 'قيمة هذا الحقل يجب أن تكون مساوية لأحد القيم المعرفة مسبقاً',
    cz: 'musí být rovna jedné hodnotě z výčtu',
    de: 'sollte einem der vorgegebenen Werte entsprechen',
    es: 'deber ser igual a uno de los valores predefinidos',
    fr: 'doit être égal à une des valeurs prédéfinies',
    hu: 'egyenlő kell legyen valamely előre meghatározott értékkel',
    it: 'dovrebbe essere pari ad uno dei valori predefiniti',
    ja: '事前に定義された値のいずれかに等しくなければいけない',
    no: 'må være lik en av de forhåndsdefinerte verdiene',
    pl: 'powinien być równy jednej z predefiniowanych wartości',
    'pt-BR': 'Deve ser igual a um dos valores predefinidos',
    ru: 'должно быть равен одному из значений в "enum"',
    sk: 'musí byť jedna z definovaných hodnôt',
    sv: 'borde vara ekvivalent med en av dess fördefinierade värden',
    zh: '应当是预设定的枚举值之一'
    // en: 'No enum match for: {value}',
    // nb: 'Ingen samsvarende enum verdi for: {value}',
    // 'pt-PT': 'Nenhuma correspondência \'enum\' para: {value}',
  },
  format: {
    en: 'should match format "{{=e.params.format}}"',
    ar: 'يجب أن يوافق الصيغة "{{=e.params.format}}"',
    cz: 'musí být ve formátu "{{=e.params.format}}"',
    de: 'sollte diesem Format entsprechen: "{{=e.params.format}}"',
    es: 'debe coincidir con el formato "{{=e.params.format}}"',
    fr: 'doit correspondre au format "{{=e.params.format}}"',
    hu: 'meg kell feleljen a következő formátumnak: "{{=e.params.format}}"',
    it: 'deve corrispondere formato "{{=e.params.format}}"',
    ja: '"{{=e.params.format}}"形式に揃えなければいけない',
    no: 'må stemme overens med formatet "{{=e.params.format}}"',
    pl: 'powinien zgadzać się z formatem "{{=e.params.format}}"',
    'pt-BR': 'A validação do formato falhou "{{=e.params.format}}"',
    ru: 'должно соответствовать формату "{{=e.params.format}}"',
    sk: 'musí obsahovať formát "{{=e.params.format}}"',
    sv: 'borde matcha formatet "{{=e.params.format}}"',
    zh: '应当匹配格式 "{{=e.params.format}}"'
    // en: 'Format validation failed ({message})',
    // nb: 'Formatteringen stemmer ikke ({message})',
    // 'pt-PT': 'A validação do formato falhou ({message})',
  },
  maximum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ar: '{{#def.c}} يجب أن يكون {{=cond}}',
    cz: '{{#def.c}}musí být {{=cond}}',
    de: '{{#def.c}}sollte {{=cond}} sein',
    es: '{{#def.c}}debe ser {{=cond}}',
    fr: '{{#def.c}}doit être {{=cond}}',
    hu: '{{#def.c}}kell legyen {{=cond}}',
    it: '{{#def.c}}dovrebbe essere {{=cond}}',
    ja: '{{#def.c}}{{=cond}}でなければいけない',
    no: '{{#def.c}}må være {{=cond}}',
    pl: '{{#def.c}}powinien być {{=cond}}',
    'pt-BR': '{{#def.c}}deve ser {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    sk: '{{#def.c}}musí byť {{=cond}}',
    sv: '{{#def.c}}borde vara {{=cond}}',
    zh: '{{#def.c}}应当为 {{=cond}}'
    // en: 'Value {value} is greater than maximum {maximum}',
    // nb: 'Verdien {value} er større enn maksimalverdi {maximum}',
    // 'pt-PT': 'O valor {value} é maior que o máximo {maximum}',
  },
  minimum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ar: '{{#def.c}} يجب أن يكون {{=cond}}',
    cz: '{{#def.c}}musí být {{=cond}}',
    de: '{{#def.c}}sollte {{=cond}} sein',
    es: '{{#def.c}}debe ser {{=cond}}',
    fr: '{{#def.c}}doit être {{=cond}}',
    hu: '{{#def.c}}kell legyen {{=cond}}',
    it: '{{#def.c}}dovrebbe essere {{=cond}}',
    ja: '{{#def.c}}{{=cond}}でなければいけない',
    no: '{{#def.c}}må være {{=cond}}',
    pl: '{{#def.c}}powinien być {{=cond}}',
    'pt-BR': '{{#def.c}}deve ser {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    sk: '{{#def.c}}musí byť {{=cond}}',
    sv: '{{#def.c}}borde vara {{=cond}}',
    zh: '{{#def.c}}应当为 {{=cond}}'
    // en: 'Value {value} is less than minimum {minimum}',
    // nb: 'Verdien {value} er mindre enn minsteverdi {minimum}',
    // 'pt-PT': 'O valor {value} é menor que o mínimo {minimum}',
  },
  maxItems: {
    en: '{{#def.n}}should not have more than {{=n}} item{{#def.mPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أكثر من {{=n}} عنصر',
    cz: '{{#def.n}}nesmí obsahovat víc než {{=n}} prv{{#def.mPlural}}',
    de: '{{#def.n}}sollte nicht mehr als {{=n}} Element{{#def.mPlural}} haben',
    es: '{{#def.n}}no debe contener más de {{=n}} elemento{{#def.mPlural}}',
    fr: '{{#def.n}}ne doit pas contenir plus de {{=n}} élément{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} eleme',
    it: '{{#def.n}}non dovrebbe avere più di {{=n}} element{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}個以上であってはいけない',
    no: '{{#def.n}}kan ikke ha fler enn {{=n}} element{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć więcej niż {{=n}} element{{#def.mPlural}}',
    'pt-BR': '{{#def.n}}não deve ter mais que {{=n}} elemento{{#def.mPlural}}',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} элемент{{#def.mPlural}}',
    sk: '{{#def.n}}nesmie obsahovať viac než {{=n}} prv{{#def.mPlural}}',
    sv: '{{#def.n}}borde inte ha fler än {{=n}} sak{{#def.mPlural}}',
    zh: '{{#def.n}}不应多于 {{=n}} 个项'
    // en: 'Array is too long ({length}), maximum {maximum}',
    // nb: 'Listen er for lang ({length} elementer), maksimalt {maximum}',
    // 'pt-PT': 'A \'array\' é muito longa ({length}), máximo {maximum}',
  },
  minItems: {
    en: '{{#def.n}}should not have less than {{=n}} item{{#def.mPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أقل من {{=n}} عنصر',
    cz: '{{#def.n}}nesmí obsahovat méně než {{=n}} prv{{#def.mPlural}}',
    de: '{{#def.n}}sollte nicht weniger als {{=n}} Element{{#def.mPlural}} haben',
    es: '{{#def.n}}no debe contener menos de {{=n}} elemento{{#def.mPlural}}',
    fr: '{{#def.n}}ne doit pas contenir moins de {{=n}} élément{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet kevesebb, mint {{=n}} eleme',
    it: '{{#def.n}}non dovrebbe avere meno di {{=n}} element{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}個以下であってはいけない',
    no: '{{#def.n}}kan ikke ha færre enn {{=n}} element{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć mniej niż {{=n}} element{{#def.mPlural}}',
    'pt-BR': '{{#def.n}}não deve ter menos que {{=n}} elemento{{#def.mPlural}}',
    ru: '{{#def.n}}должно иметь не менее, чем {{=n}} элемент{{#def.mPlural}}',
    sk: '{{#def.n}}nesmie obsahovať menej než {{=n}} prv{{#def.mPlural}}',
    sv: '{{#def.n}}borde inte ha färre än {{=n}} sak{{#def.mPlural}}',
    zh: '{{#def.n}}不应少于 {{=n}} 个项'
    // en: 'Array is too short ({length}), minimum {minimum}',
    // nb: 'Listen er for kort ({length} elementer), minst {minimum}',
    // 'pt-PT': 'A \'array\' é muito curta ({length}), mínimo {minimum}',
  },
  maxLength: {
    en: '{{#def.n}}should not be longer than {{=n}} character{{#def.mPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أكثر من {{=n}} محرف',
    cz: '{{#def.n}}nesmí být delší než {{=n}} znak{{? n!=1 }}ů{{?}}',
    de: '{{#def.n}}sollte nicht länger als {{=n}} Zeichen sein',
    es: '{{#def.n}}no debe contener más de {{=n}} caracter{{? n!=1 }}es{{?}}',
    fr: '{{#def.n}}ne doit pas dépasser {{=n}} caractère{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet hosszabb, mint {{=n}} szimbólum',
    it: '{{#def.n}}non dovrebbe essere più lungo di {{=n}} caratter{{? n==1 }}e{{??}}i{{?}}',
    ja: '{{#def.n}}は{{=n}}文字以上であってはいけない',
    no: '{{#def.n}}kan ikke være lengre enn {{=n}} tegn',
    pl: '{{#def.n}}nie powinien być dłuższy niż {{=n}} znak{{? n!=1 }}ów{{?}}',
    'pt-BR': '{{#def.n}}não deve ter mais que {{=n}} caracter{{? n!=1 }}es{{?}}',
    ru: '{{#def.n}}должно быть не длиннее, чем {{=n}} символ{{#def.mPlural}}',
    sk: '{{#def.n}}nesmie byť dlhší než {{=n}} znak{{? n!=1 }}ov{{?}}',
    sv: '{{#def.n}}borde inte vara längre än {{=n}} tecken',
    zh: '{{#def.n}}不应多于 {{=n}} 个字符'
    // en: 'String is too long ({length} chars), maximum {maximum}',
    // nb: 'Strengen er for lang ({length} tegn), maksimalt {maximum}',
    // 'pt-PT': 'A \'string\' é muito longa ({length} caracteres), máximo {maximum}',
  },
  minLength: {
    en: '{{#def.n}}should not be shorter than {{=n}} character{{#def.mPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أقل من {{=n}} محرف',
    cz: '{{#def.n}}nesmí být kratší než {{=n}} znak{{? n!=1 }}ů{{?}}',
    de: '{{#def.n}}sollte nicht kürzer als {{=n}} Zeichen sein',
    es: '{{#def.n}}no debe contener menos de {{=n}} caracter{{? n!=1 }}es{{?}}',
    fr: '{{#def.n}}ne doit pas faire moins de {{=n}} caractère{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet rövidebb, mint {{=n}} szimbólum',
    it: '{{#def.n}}non dovrebbe essere meno lungo di {{=n}} caratter{{? n==1 }}e{{??}}i{{?}}',
    ja: '{{#def.n}}は{{=n}}文字以下であってはいけない',
    no: '{{#def.n}}kan ikke være kortere enn {{=n}} tegn',
    pl: '{{#def.n}}nie powinien być krótszy niż {{=n}} znak{{? n!=1 }}ów{{?}}',
    'pt-BR': '{{#def.n}}não deve ter menos que {{=n}} caracter{{? n!=1 }}es{{?}}',
    ru: '{{#def.n}}должно быть не короче, чем {{=n}} символ{{#def.mPlural}}',
    sk: '{{#def.n}}nesmie byť kratší než {{=n}} znak{{? n!=1 }}ov{{?}}',
    sv: '{{#def.n}}borde inte vara kortare än {{=n}} tecken',
    zh: '{{#def.n}}不应少于 {{=n}} 个字符'
    // en: 'String is too short ({length} chars), minimum {minimum}',
    // nb: 'Strengen er for kort ({length} tegn), minst {minimum}',
    // 'pt-PT': 'A \'string\' é muito curta ({length} caracteres), mínimo {minimum}',
  },
  maxProperties: {
    en: '{{#def.n}}should not have more than {{=n}} propert{{#def.propPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أكثر من {{=n}} خصائص',
    cz: '{{#def.n}}nesmí mít víc než {{=n}} polož{{#def.propPlural}}',
    de: '{{#def.n}}sollte nicht mehr als {{=n}} Attribut{{#def.propPlural}} haben',
    es: '{{#def.n}}no debe contener más de {{=n}} propiedad{{#def.propPlural}}',
    fr: '{{#def.n}}ne doit pas contenir plus de {{=n}} propriété{{#def.propPlural}}',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} tulajdonsága',
    it: '{{#def.n}}non dovrebbe avere più {{=n}} attribut{{#def.propPlural}}',
    ja: '{{#def.n}}は{{=n}}個以上のプロパティを有してはいけない',
    no: '{{#def.n}}kan ikke ha mer enn {{=n}} egenskap{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien zawierać więcej niż {{=n}} {{? n==1 }}pole{{??}}pól{{?}}',
    'pt-BR': '{{#def.n}}não deve ter mais que {{=n}} propriedade{{#def.propPlural}}',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} пол{{#def.propPlural}}',
    sk: '{{#def.n}}nesmie obsahovať viac než {{=n}} polož{{#def.propPlural}}',
    sv: '{{#def.n}}borde inte ha fler än {{=n}} egenskap{{#def.propPlural}}',
    zh: '{{#def.n}}不应有多于 {{=n}} 个属性'
    // en: 'Too many properties defined ({propertyCount}), maximum {maximum}',
    // nb: 'For mange variabler definert ({propertyCount}), makismalt {maximum} er tillatt',
    // 'pt-PT': 'Muitas propriedades definidas ({propertyCount}), máximo {maximum}',
  },
  minProperties: {
    en: '{{#def.n}}should not have less than {{=n}} propert{{#def.propPlural}}',
    ar: '{{#def.n}} يجب أن لا يحوي أقل من {{=n}} خصائص',
    cz: '{{#def.n}}nesmí mít méně než {{=n}} polož{{#def.propPlural}}',
    de: '{{#def.n}}sollte nicht weniger als {{=n}} Attribut{{#def.propPlural}} haben',
    es: '{{#def.n}}no debe contener menos de {{=n}} propiedad{{#def.propPlural}}',
    fr: '{{#def.n}}ne doit pas contenir moins de {{=n}} propriété{{#def.propPlural}}',
    hu: '{{#def.n}}nem lehet kevesebb, mint {{=n}} tulajdonsága',
    it: '{{#def.n}}non dovrebbe avere meno {{=n}} attribut{{#def.propPlural}}',
    ja: '{{#def.n}}は{{=n}}個以下のプロパティを有してはいけない',
    no: '{{#def.n}}kan ikke ha mindre enn {{=n}} egenskap{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien zawierać mniej niż {{=n}} {{? n==1 }}pole{{??}}pól{{?}}',
    'pt-BR': '{{#def.n}}não deve ter menos que {{=n}} propriedade{{#def.propPlural}}',
    ru: '{{#def.n}}должно иметь не менее, чем {{=n}} пол{{#def.propPlural}}',
    sk: '{{#def.n}}nesmie obsahovať menej než {{=n}} polož{{#def.propPlural}}',
    sv: '{{#def.n}}borde inte ha färre än {{=n}} egenskap{{#def.propPlural}}',
    zh: '{{#def.n}}不应有少于 {{=n}} 个属性'
    // en: 'Too few properties defined ({propertyCount}), minimum {minimum}',
    // nb: 'For få variabler definert ({propertyCount}), minst {minimum} er forventet',
    // 'pt-PT': 'Poucas propriedades definidas ({propertyCount}), mínimo {minimum}',
  },
  multipleOf: {
    en: 'should be a multiple of {{=e.params.multipleOf}}',
    ar: ' يجب أن يحوي أكثر من {{=e.params.multipleOf}}',
    cz: 'musí být násobkem {{=e.params.multipleOf}}',
    de: 'sollte ein Vielfaches von {{=e.params.multipleOf}} sein',
    es: 'debe ser múltiplo de {{=e.params.multipleOf}}',
    fr: 'doit être un multiple de {{=e.params.multipleOf}}',
    hu: 'a többszöröse kell legyen a következő számnak: {{=e.params.multipleOf}}',
    it: 'dovrebbe essere un multiplo di {{=e.params.multipleOf}}',
    ja: '{{=e.params.multipleOf}}の倍数でなければいけない',
    no: 'må være et multiplum av {{=e.params.multipleOf}}',
    pl: 'powinien być wielokrotnością {{=e.params.multipleOf}}',
    'pt-BR': 'deve ser múltiplo de {{=e.params.multipleOf}}',
    ru: 'должно быть кратным {{=e.params.multipleOf}}',
    sk: 'musí byť násobkom {{=e.params.multipleOf}}',
    sv: 'borde vara en multipel av {{=e.params.multipleOf}}',
    zh: '应当是 {{=e.params.multipleOf}} 的整数倍'
    // en: 'Value {value} is not a multiple of {multipleOf}',
    // nb: 'Verdien {value} er ikke et multiplum av {multipleOf}',
    // 'pt-PT': 'O valor {value} não é um múltiplo de {multipleOf}',
  },
  not: {
    en: 'should not be valid according to schema in "not"',
    ar: 'يجب أن يكون غير صحيح وفقاً للمخطط "not"',
    cz: 'nesmí vyhovět schématu v "not"',
    de: 'sollte dem in "not" angegebenen Schema widersprechen',
    es: 'no debe ser válido según el esquema en "not"',
    fr: 'est invalide selon le schéma "not"',
    hu: 'nem lehet érvényes a "not" alaknak megfelelően',
    it: 'non dovrebbe essere valida in base allo schema di "non"',
    ja: '"not"のスキーマに従って有効としてはいけない',
    no: 'kan ikke samsvare med schema i "not"',
    pl: 'nie powinien pasować do wzoru z sekcji "not"',
    'pt-BR': 'não deve ser valido segundo o esquema em "not"',
    ru: 'должно не соответствовать схеме в "not"',
    sk: 'nesmie splňovať schému v "not"',
    sv: 'borde inte vara giltigt enligt schema i "not"',
    zh: '不应当匹配 "not" schema'
    // en: 'Data matches schema from "not"',
    // nb: 'Data samsvarer med skjema fra "not"',
    // 'pt-PT': 'Os dados correspondem a um esquema de "not"',
  },
  oneOf: {
    en: 'should match exactly one schema in "oneOf"',
    ar: 'يجب أن يوافق مخطط واحد فقط موجود في "oneOf"',
    cz: 'musí vyhovět právě jednomu schématu v "oneOf"',
    de: 'sollte genau einem der Schemata in "oneOf" entsprechen',
    es: 'debe coincidir con un solo esquema en "oneOf"',
    fr: 'doit correspondre à exactement un schéma de "oneOf"',
    hu: 'meg kell feleljen pontosan egy "anyOf" alaknak',
    it: 'dovrebbe corrispondere esattamente uno schema in "oneOf"',
    ja: '"oneOf"のスキーマと完全に一致しなくてはいけない',
    no: 'må samsvare med nøyaktig ett schema i "oneOf"',
    pl: 'powinien pasować do jednego wzoru z sekcji "oneOf"',
    'pt-BR': 'deve corresponder exatamente com um esquema em "oneOf"',
    ru: 'должно соответствовать в точности одной схемe в "oneOf"',
    sk: 'musí splňovať práve jednu schému v "oneOf"',
    sv: 'borde matcha exakt ett schema i "oneOf"',
    zh: '只能匹配一个 "oneOf" 中的 schema'
    // en: 'Data does not match any schemas from "oneOf"',
    // nb: 'Data samsvarer ikke med noe skjema fra "oneOf"',
    // 'pt-PT': 'Os dados não correspondem a nenhum esquema de "oneOf"',
  },
  pattern: {
    en: 'should match pattern "{{=e.params.pattern}}"',
    ar: 'يجب أن يوافق النمط "{{=e.params.pattern}}"',
    cz: 'musí vyhovět regulárnímu výrazu "{{=e.params.pattern}}"',
    de: 'sollte diesem Muster entsprechen: "{{=e.params.pattern}}"',
    es: 'debe coincidir con el patron "{{=e.params.pattern}}"',
    fr: 'doit correspondre au format "{{=e.params.pattern}}"',
    hu: 'meg kell feleljen a következő mintának: "{{=e.params.pattern}}"',
    it: 'deve corrispondere al modello "{{=e.params.pattern}}"',
    ja: '"{{=e.params.pattern}}"のパターンと一致しなければいけない',
    no: 'må samsvare med mønsteret "{{=e.params.pattern}}"',
    pl: 'powinien zgadzać się ze wzorem "{{=e.params.pattern}}"',
    'pt-BR': 'deve corresponder ao padrão "{{=e.params.pattern}}"',
    ru: 'должно соответствовать образцу "{{=e.params.pattern}}"',
    sk: 'musí splňovať regulárny výraz "{{=e.params.pattern}}"',
    sv: 'borde matcha mönstret "{{=e.params.pattern}}"',
    zh: '应当匹配模式 "{{=e.params.pattern}}"'
    // en: 'String does not match pattern: {pattern}',
    // nb: 'Strengen samsvarer ikke med regulært uttrykk: {pattern}',
    // 'pt-PT': 'A \'string\' não corresponde ao modelo: {pattern}',
  },
  required: {
    en: 'should have required property {{=e.params.missingProperty}}',
    ar: 'هذا الحقل إلزامي',
    cz: 'musí obsahovat požadovanou položku {{=e.params.missingProperty}}',
    de: 'sollte das erforderliche Attribut {{=e.params.missingProperty}} enthalten',
    es: 'debe tener la propiedad requerida {{=e.params.missingProperty}}',
    fr: 'requiert la propriété {{=e.params.missingProperty}}',
    hu: 'kell legyen {{=e.params.missingProperty}} tulajdonsága',
    it: 'dovrebbe avere attributo richiesta {{=e.params.missingProperty}}',
    ja: '必要なプロパティ{{=e.params.missingProperty}}がなければいけない',
    no: 'må ha den påkrevde egenskapen {{=e.params.missingProperty}}',
    pl: 'powinien zawierać wymagane pole {{=e.params.missingProperty}}',
    'pt-BR': 'deve ter a propriedade requerida {{=e.params.missingProperty}}',
    ru: 'должно иметь обязательное поле {{=e.params.missingProperty}}',
    sk: 'musí obsahovať požadovanú položku {{=e.params.missingProperty}}',
    sv: 'borde ha den nödvändiga egenskapen {{=e.params.missingProperty}}',
    zh: '应当有必需属性 {{=e.params.missingProperty}}'
    // en: 'Missing required property: {key}',
    // nb: 'Mangler obligatorisk variabel: {key}',
    // 'pt-PT': 'Propriedade necessária em falta: {key}',
  },
  type: {
    _defs: {
      t: '{{var t = e.params.type;}}'
    },
    en: 'should be {{=e.params.type}}',
    ar: 'قيمة هذا الحقل غير صالحة',
    cz: 'musí být {{=e.params.type}}',
    de: 'sollte sein: {{=e.params.type}}',
    es: 'debe ser {{=e.params.type}}',
    fr: 'doit être de type {{=e.params.type}}',
    hu: '{{=e.params.type}} kell legyen',
    it: 'dovrebbe essere {{=e.params.type}}',
    ja: '{{=e.params.type}}でなければいけない',
    no: '{{#def.t}}må være {{? t == "number" }}et tall{{?? t == "integer"}}et heltall{{?? t == "string"}}en streng{{?? t == "boolean"}}ja eller nei{{??}}{{=t}}{{?}}',
    pl: 'powinien być {{=e.params.type}}',
    'pt-BR': 'deve ser {{=e.params.type}}',
    ru: 'должно быть {{=e.params.type}}',
    sk: 'musí byť {{=e.params.type}}',
    sv: 'borde vara {{=e.params.type}}',
    zh: '应当是 {{=e.params.type}} 类型'
    // en: 'Invalid type: {type} (expected {expected})',
    // nb: 'Ugyldig type: {type} (forventet {expected})',
    // 'pt-PT': 'Tipo inválido: {type} (esperava {expected})',
  },
  uniqueItems: {
    en: 'should not have duplicate items (items ## {{=e.params.j}} and {{=e.params.i}} are identical)',
    ar: 'يجب أن لا يحوي عناصر مكررة (العنصر ## {{=e.params.j}} و {{=e.params.i}} متطابقة)',
    cz: 'nesmí obsahovat duplicitní prvky (prvky ## {{=e.params.j}} a {{=e.params.i}} jsou stejné)',
    de: 'sollte keine Duplikate enthalten (Elemente #{{=e.params.j}} und #{{=e.params.i}} sind gleich)',
    es: 'no debe contener elementos duplicados, (los elementos ## {{=e.params.j}} y {{=e.params.i}} son idénticos)',
    fr: 'ne doit pas contenir de doublons (les éléments ## {{=e.params.j}} et {{=e.params.i}} sont identiques)',
    hu: 'nem lehetnek azonos elemei ({{=e.params.j}} és {{=e.params.i}} elemek azonosak)',
    it: 'non dovrebbe avere elementi duplicati (elementi ## {{=e.params.j}} e {{=e.params.i}} sono uguali)',
    ja: '重複するアイテムがあってはいけない（{{=e.params.j}}と{{=e.params.i}}は同じである）',
    no: 'kan ikke ha duplikate elemeneter (elementene ## {{=e.params.j}} og {{=e.params.i}} er identiske)',
    pl: 'nie powinien zawierać elementów które się powtarzają (elementy {{=e.params.j}} i {{=e.params.i}} są identyczne)',
    'pt-BR': 'não deve ter itens duplicados (os itens ## {{=e.params.j}} e {{=e.params.i}} são idênticos)',
    ru: 'не должно иметь повторяющихся элементов (элементы {{=e.params.j}} и {{=e.params.i}} идентичны)',
    sk: 'nesmie obsahovať duplicitné prvky (prvky ## {{=e.params.j}} a {{=e.params.i}} sú rovnaké)',
    sv: 'borde inte ha duplicerade saker (sakerna ## {{=e.params.j}} och {{=e.params.i}} är identiska)',
    zh: '不应当含有重复项 (第 {{=e.params.j}} 项与第 {{=e.params.i}} 项是重复的)'
    // en: 'Array items are not unique (indices {match1} and {match2})',
    // nb: 'Elementene er ikke unike (indeks {match1} og {match2} er like)',
    // 'pt-PT': 'Os itens da \'array\' não são únicos (índices {match1} e {match2})',
  },
  custom: {
    en: 'should pass "{{=e.keyword}}" keyword validation',
    ar: 'يجب أن تمرر كلمة التحقق المفتاحية "{{=e.keyword}}"',
    cz: 'musí vyhovět "{{=e.keyword}}" validaci',
    de: 'sollte die Validierung "{{=e.keyword}}" bestehen',
    es: 'debe pasar la validación de palabra clave "{{=e.keyword}}"',
    fr: 'doit être valide selon le critère "{{=e.keyword}}"',
    no: 'må samsvare med valideringen for {{=e.keyword}}',
    pl: 'powinien przejść walidację "{{=e.keyword}}"',
    'pt-BR': 'deve passar a validação de palavras-chave "{{=e.keyword}}"',
    ru: 'должно соответствовать правилу "{{=e.keyword}}"',
    sk: 'musí splniť "{{=e.keyword}}" validáciu',
    sv: 'bör passera "{{=e.keyword}}" nyckelord validering',
    zh: '应当通过 "{{=e.keyword}} 关键词校验"'
  },
  patternGroups: {
    en: '{{#def.n}}should have {{=e.params.reason}} {{=n}} propert{{#def.propPlural}} matching pattern "{{=e.params.pattern}}"',
    ar: '{{#def.n}} يجب أن يحوي {{=e.params.reason}}{{=n}} خصائص توافق النمط "{{=e.params.pattern}}"',
    cz: '{{#def.n}}musí obsahovat {{=e.params.reason}} {{=n}} polož{{#def.propPlural}} vyhovující regulárnímu výrazu "{{=e.params.pattern}}"',
    de: '{{#def.n}}sollte {{=e.params.reason}} {{=n}} Attribut{{#def.propPlural}} nach folgendem Muster haben "{{=e.params.pattern}}"',
    es: '{{#def.n}}debe tener {{=e.params.reason}} {{=n}} propiedad{{#def.propPlural}} coincidente{{#def.mPlural}} con el patrón "{{=e.params.pattern}}"',
    fr: '{{#def.n}}doit avoir {{=e.params.reason}} {{=n}} propriété{{#def.propPlural}} correspondant au format "{{=e.params.pattern}}"',
    no: '{{#def.n}}må ha {{=e.params.reason}} {{=n}} egenskap{{#def.mPlural}} som samsvarer med mønsteret "{{=e.params.pattern}}"',
    pl: '{{#def.n}}powinien mieć {{=e.params.reason}} {{=n}} pol{{#def.propPlural}} pasujące do wzorca "{{=e.params.pattern}}"',
    'pt-BR': '{{#def.n}}deve ter {{=e.params.reason}} {{=n}} propriedade{{# def.propPlural}} padrão de correspondência "{{=e.params.pattern}}"',
    ru: '{{#def.n}}должно иметь {{=e.params.reason}} {{=n}} пол{{#def.propPlural}}, соответствующих образцу "{{=e.params.pattern}}"',
    sk: '{{#def.n}}musí obsahovať {{=e.params.reason}} {{=n}} polož{{#def.propPlural}} splňjúcu regulárny výraz "{{=e.params.pattern}}"',
    sv: '{{#def.n}}bör ha {{=e.params.reason}} {{=n}} egenskap{{#def.propPlural}} som matchar mönstret "{{=e.params.pattern}}"',
    zh: '{{#def.n}}应当有 {{=n}} 个 {{=e.params.reason}} 属性满足模式 {{=e.params.pattern}}'
  },
  propertyNames: {
    en: 'property name \'{{=e.params.propertyName}}\' is invalid',
    ar: 'اسم الخاصية \'{{=e.params.propertyName}}\' غير صالح',
    cz: 'název položky \'{{=e.params.propertyName}}\' neodpovídá schématu',
    de: 'Attributname \'{{=e.params.propertyName}}\' ist ungültig',
    no: 'egenskapen med navnet \'{{e.params.propertyName}}\' er ugyldig',
    ru: 'имя поля \'{{=e.params.propertyName}}\' не соответствует схеме',
    sk: 'názov položky \'{{=e.params.propertyName}}\' nezodpovedá schéme',
    sv: 'egenskap med namnet \'{{=e.params.propertyName}}\' är inte giltig'
  },
  patternRequired: {
    en: 'should have property matching pattern "{{=e.params.missingPattern}}"',
    ar: 'يجب أن يحوي خاصية توافق النمط "{{=e.params.missingPattern}}"',
    cz: 'musí obsahovat položku vyhovující regulárnímu výrazu "{{=e.params.missingPattern}}"',
    de: 'sollte ein Attribut nach folgendem Muster haben "{{=e.params.missingPattern}}"',
    es: 'la propiedad debe coincidir con el patrón "{{=e.params.missingPattern}}"',
    fr: 'la propriété doit correspondre au format "{{=e.params.missingPattern}}"',
    no: 'må ha en egenskap som samsvarer med mønsteret "{{=e.params.missingPattern}}',
    pl: 'powinien mieć pole pasujące do wzorca "{{=e.params.missingPattern}}"',
    'pt-BR': 'deve ter a propriedade de padrão de correspondência "{{=e.params.missingPattern}}"',
    ru: 'должно иметь поле, соответствующее образцу "{{=e.params.missingPattern}}"',
    sk: 'musí obsahovať položku splňjúcu regulárny výraz "{{=e.params.missingPattern}}"',
    sv: 'bör ha en egenskap som matchar mönstret "{{=e.params.missingPattern}}"',
    zh: '应当有属性匹配模式 {{=e.params.missingPattern}}'
  },
  switch: {
    en: 'should pass "switch" keyword validation, case {{=e.params.caseIndex}} fails',
    ar: 'يجب أن تمرر كلمة التحقق المفتاحية "switch"، الحالة {{=e.params.caseIndex}}  خاطئة',
    cz: 'musí projít validácí "switch", případ {{=e.params.caseIndex}} je neúspěšný',
    de: 'sollte der "switch" Validierung entsprechen, der Fall {{=e.params.caseIndex}} schlägt fehl',
    es: 'debe pasar la validación "switch" de palabra clave, el caso {{=e.params.caseIndex}} falló',
    fr: 'doit être valide selon le critère "switch":validation par mot-clé, le cas {{=e.params.caseIndex}} est invalide',
    no: 'må passere "switch" validering, tilfellet {{=e.params.caseIndex}} misslykkes',
    pl: 'powinien przejść walidacje pola "switch", przypadek {{=e.params.caseIndex}} zawiódł',
    'pt-BR': 'deve passar a validação "switch" de palavra-chave, o caso {{=e.params.caseIndex}} falha',
    ru: 'должно соответствовать правилу {{=e.params.caseIndex}} в "switch"',
    sk: 'musí prejsť validáciou "switch", prípad {{=e.params.caseIndex}} je neúspešný',
    sv: 'bör passera "switch" nyckelord validering, fallet {{=e.params.caseIndex}} misslyckas',
    zh: '由于 {{=e.params.caseIndex}} 失败，未通过 "switch" 校验, '
  },
  const: {
    en: 'should be equal to constant',
    ar: 'يجب أن يكون ثابتاً',
    cz: 'musí být konstantní',
    de: 'sollte der Konstante entsprechen',
    es: 'debe ser igual a la constante',
    fr: 'doit être égal à la constante',
    no: 'må være lik konstanten',
    pl: 'powinien być równy stałej',
    ru: 'должно быть равно заданному значению',
    sk: 'musí byť konštanta',
    sv: 'bör vara en konstant',
    zh: '应当等于常量'
  },
  constant: {
    en: 'should be equal to constant',
    ar: 'يجب أن يكون غير ثاباً',
    cz: 'musí být konstantní',
    de: 'sollte der Konstante entsprechen',
    es: 'debe ser igual a la constante',
    fr: 'doit être égal à la constante',
    no: 'må være lik konstanten',
    pl: 'powinien być równy stałej',
    'pt-BR': 'deve ser igual à constante',
    ru: 'должно быть равно заданному значению',
    sk: 'musí byť konštanta',
    sv: 'bör vara en konstant',
    zh: '应当等于常量'
  },
  contains: {
    en: 'should contain a valid item',
    ar: 'يجب أن يحوي عنصرا صحيح',
    cz: 'musí obsahovat prvek odpovídající schématu',
    de: 'sollte ein valides Element enthalten',
    no: 'må inneholde et gyldig element',
    'pt-BR': 'deve conter um item válido',
    ru: 'должно содержать значение соответствующее схеме',
    sk: 'musí obsahovať prvok zodpovedajúci schéme',
    sv: 'bör innehålla ett giltigt objekt'
  },
  formatMaximum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ar: '{{#def.c}} يجب أن يكون {{=cond}}',
    cz: '{{#def.c}}musí být {{=cond}}',
    de: '{{#def.c}}sollte {{=cond}} sein',
    es: '{{#def.c}}debe ser {{=cond}}',
    fr: '{{#def.c}}doit être {{=cond}}',
    no: '{{#def.c}}må være {{=cond}}',
    pl: '{{#def.c}}powinien być {{=cond}}',
    'pt-BR': '{{#def.c}}deve ser {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    sk: '{{#def.c}}musí byť {{=cond}}',
    sv: '{{#def.c}}bör vara {{=cond}}',
    zh: '{{#def.c}}应当是 {{=cond}}'
  },
  formatMinimum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ar: '{{#def.c}} يجب أن يكون {{=cond}}',
    cz: '{{#def.c}}musí být {{=cond}}',
    de: '{{#def.c}}sollte {{=cond}} sein',
    es: '{{#def.c}}debe ser {{=cond}}',
    fr: '{{#def.c}}doit être {{=cond}}',
    no: '{{#def.c}}må være {{=cond}}',
    pl: '{{#def.c}}powinien być {{=cond}}',
    'pt-BR': '{{#def.c}}deve ser {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    sk: '{{#def.c}}musí byť {{=cond}}',
    sv: '{{#def.c}}bör vara {{=cond}}',
    zh: '{{#def.c}}应当是 {{=cond}}'
  },
  formatExclusiveMaximum: {
    en: 'formatExclusiveMaximum should be boolean',
    ar: 'formatExclusiveMaximum يجب أن يكون منطقياً',
    cz: 'formatExclusiveMaximum musí být boolean',
    de: 'formatExclusiveMaximum sollte ein boolscher Wert sein',
    es: 'formatExclusiveMaximum debe ser booleano',
    fr: 'formatExclusiveMaximum doit être un booléen',
    no: 'formatExclusiveMaximum må være en boolsk verdi',
    pl: 'formatExclusiveMaximum powinien być boolean',
    'pt-BR': 'formatExclusiveMaximum deve ser um booleano',
    ru: 'formatExclusiveMaximum должно быть boolean',
    sk: 'formatExclusiveMaximum musí byť boolean',
    sv: 'formatExclusiveMaximum bör vara en boolean',
    zh: 'formatExclusiveMaximum 应当是布尔值'
  },
  formatExclusiveMinimum: {
    en: 'formatExclusiveMinimum should be boolean',
    ar: 'formatExclusiveMinimum يجب أن يكون منطقياً',
    cz: 'formatExclusiveMinimum musí být boolean',
    de: 'formatExclusiveMinimum sollte ein boolscher Wert sein',
    es: 'formatExclusiveMinimum debe ser booleano',
    fr: 'formatExclusiveMinimum doit être un booléen',
    no: 'formatExclusiveMinimum må være en boolsk verdi',
    pl: 'formatExclusiveMinimum powinień być boolean',
    'pt-BR': 'formatExclusiveMaximum deve ser um booleano',
    ru: 'formatExclusiveMinimum должно быть boolean',
    sk: 'formatExclusiveMinimum musí byť boolean',
    sv: 'formatExclusiveMaximum bör vara en boolean',
    zh: 'formatExclusiveMinimum 应当是布尔值'
  }
};

module.exports.exclusiveMaximum = module.exports.maximum;
module.exports.exclusiveMinimum = module.exports.minimum;
