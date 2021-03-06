const pera = '/images/products/pera.png'
const maca = '/images/products/maca.png'
const melancia = '/images/products/melancia.png'
const melao = '/images/products/melao.png'
const morango = '/images/products/morango.png'
const banana = '/images/products/banana.jpg'
const pao_de_forma_pullman = '/images/products/pao_de_forma_pullman.jpg'
const pao_de_forma_panco = '/images/products/pao_de_forma_panco.jpg'
const presunto_cozido_sadia = '/images/products/presunto_cozido_sadia.png'
const queijo_minas_light_tirolez = '/images/products/queijo_minas_light_tirolez.png'

const farinha_de_trigo_dona_benta = '/images/products/farinha_de_trigo_dona_benta.jpg'
const farinha_mandioca_yoki = '/images/products/farinha_mandioca_yoki.png'
const acucar_olho_dagua = '/images/products/acucar_olho_dagua.png'
const acucar_caravelas = '/images/products/acucar_caravelas.png'
const acucar_uniao = '/images/products/acucar_uniao.png'
const arroz_branco_camil = '/images/products/arroz_branco_camil.png'
const arroz_integral_camil = '/images/products/arroz_integral_camil.png'
const arroz_parboilizado_camil = '/images/products/arroz_parboilizado_camil.png'
const atum_solido_gomes_da_costa = '/images/products/atum_solido_gomes_da_costa.jpg'
const cafe_nescafe = '/images/products/cafe_nescafe.png'
const feijao_carioca_camil = '/images/products/feijao_carioca_camil.png'
const leite_em_po_ninho = '/images/products/leite_em_po_ninho.png'
const macarrao_pena_renata = '/images/products/macarrao_pena_renata.jpg'
const macarrao_instantaneo_nissin = '/images/products/macarrao_instantaneo_nissin.png'
const oleo_de_girassol_liza = '/images/products/oleo_de_girassol_liza.png'
const oleo_de_milho_liza = '/images/products/oleo_de_milho_liza.jpg'
const sardinha_coqueiro = '/images/products/sardinha_coqueiro.jpg'
const toddy_achocolatado = '/images/products/toddy_achocolatado.jpg'

const papel_higienico_neve = '/images/products/papel_higienico_neve.png'
const papel_higienico_elite = '/images/products/papel_higienico_elite.png'
const pasta_de_dente_sorriso = '/images/products/pasta_de_dente_sorriso.png'
const pasta_de_dente_oralb = '/images/products/pasta_de_dente_oralb.png'
const pasta_de_dente_colgate = '/images/products/pasta_de_dente_colgate.png'
const sabonete_dove = '/images/products/sabonete_dove.png'
const sabonete_johnson = '/images/products/sabonete_johnson.png'
const sabonete_lux = '/images/products/sabonete_lux.png'
const sabonete_nivea = '/images/products/sabonete_nivea.png'
const shampoo_dove = '/images/products/shampoo_dove.png'
const shampoo_johnson = '/images/products/shampoo_johnson.png'

const agua_sanitaria_ype = '/images/products/agua_sanitaria_ype.jpg'
const ajax_fresh_lemon = '/images/products/ajax_fresh_lemon.png'
const sabao_ariel = '/images/products/sabao_ariel.png'

const fruit = [
    {
        name: 'Pera 200 g',
        image: pera,
        stockAmount: 10,
        price: 6.98,
        unit: '200 g',
        discount: 0.05,
        description: 'Pera 200 g',
        categories: ['perishable'],
        tags: ['fruta', 'saud??vel']
    },
    {
        name: 'Ma???? 200 g',
        image: maca,
        stockAmount: 10,
        price: 6.98,
        unit: '200 g',
        discount: 0,
        description: 'Ma???? 200 g',
        categories: ['perishable'],
        tags: ['fruta', 'saud??vel']
    },
    {
        name: 'Banana 350 g',
        image: banana,
        stockAmount: 10,
        price: 6.98,
        unit: '350 g',
        discount: 0.20,
        description: 'Banana 350 g',
        categories: ['perishable'],
        tags: ['fruta', 'saud??vel']
    },
    {
        name: 'Melancia 8 kg (un.)',
        image: melancia,
        stockAmount: 10,
        price: 32.20,
        unit: '8 kg',
        discount: 0.05,
        description: 'Melancia 8 kg (un.)',
        categories: ['perishable'],
        tags: ['fruta', 'saud??vel']
    },
    {
        name: 'Mel??o 2 kg (un.)',
        image: melao,
        stockAmount: 10,
        price: 16.98,
        unit: '2 kg',
        discount: 0,
        description: 'Mel??o 2 kg (un.)',
        categories: ['perishable'],
        tags: ['fruta', 'saud??vel']
    },
    {
        name: 'Morango 250 g',
        image: morango,
        stockAmount: 10,
        price: 14.98,
        unit: '250 g',
        discount: 0.20,
        description: 'Morango 250 g',
        categories: ['perishable'],
        tags: ['fruta', 'saud??vel']
    },
]

const coldCut = [
    {
        name: 'Presunto cozido Sadia 180 g',
        image: presunto_cozido_sadia,
        stockAmount: 10,
        price: 6.98,
        unit: '180 g',
        discount: 0.05,
        description: 'Presunto cozido Sadia 180 g',
        categories: ['perishable'],
        tags: ['frios', 'presunto', 'sadia']
    },
    {
        name: 'Queijo minas (padr??o) light fracionado',
        image: queijo_minas_light_tirolez,
        stockAmount: 10,
        price: 6.98,
        unit: '100 g',
        discount: 0,
        description: 'Queijo minas (padr??o) light fracionado',
        categories: ['perishable'],
        tags: ['frios', 'queijo', 'minas', 'tirolez']
    },
]

const bread = [
    {
        name: 'P??o de f??rma tradicional Pullman 500 g',
        image: pao_de_forma_pullman,
        stockAmount: 10,
        price: 6.98,
        unit: '500 g',
        discount: 0,
        description: 'P??o de f??rma tradicional Pullman 500 g',
        categories: ['perishable'],
        tags: ['p??o', 'lanche', 'pullman']
    },
    {
        name: 'P??o de forma premium Panco 500 g',
        image: pao_de_forma_panco,
        stockAmount: 10,
        price: 6.98,
        unit: '500 g',
        discount: 0.20,
        description: 'P??o de forma premium Panco 500 g',
        categories: ['perishable'],
        tags: ['p??o', 'lanche', 'panco']
    },
]

const canned = [
    {
        name: 'Atum S??lido em ??leo Gomes da Costa (un.)',
        image: atum_solido_gomes_da_costa,
        stockAmount: 10,
        price: 5.12,
        unit: '50 g',
        discount: 0,
        description: 'Atum S??lido em ??leo Gomes da Costa (un.)',
        categories: ['nonPerishable'],
        tags: ['atum', 'lanche', 'enlatado', 'peixe', 'dur??vel']
    },
    {
        name: 'Sardinhas com ??leo Coqueiro (un.)',
        image: sardinha_coqueiro,
        stockAmount: 10,
        price: 5.12,
        unit: '50 g',
        discount: 0,
        description: 'Sardinhas com ??leo Coqueiro (un.)',
        categories: ['nonPerishable'],
        tags: ['sardinha', 'lanche', 'enlatado', 'peixe', 'dur??vel']
    },
]

const grain = [
    {
        name: 'Arroz Branco Tipo 1 Camil 5 kg',
        image: arroz_branco_camil,
        stockAmount: 10,
        price: 5.12,
        unit: '5 kg',
        discount: 0,
        description: 'Arroz Branco Tipo 1 Camil 5 kg',
        categories: ['nonPerishable'],
        tags: ['arroz', 'dia a dia', 'gr??os', 'b??sicos', 'dur??vel']
    },
    {
        name: 'Feij??o Carioca Comum Camil 1 kg',
        image: feijao_carioca_camil,
        stockAmount: 10,
        price: 5.12,
        unit: '1 kg',
        discount: 0,
        description: 'Feij??o Carioca Comum Camil 1 kg',
        categories: ['nonPerishable'],
        tags: ['feij??o', 'dia a dia', 'gr??os', 'b??sicos', 'dur??vel']
    },
    {
        name: 'Arroz Parboilizado Camil 5 kg',
        image: arroz_parboilizado_camil,
        stockAmount: 10,
        price: 5.12,
        unit: '5 kg',
        discount: 0,
        description: 'Arroz Parboilizado Camil 5 kg',
        categories: ['nonPerishable'],
        tags: ['arroz', 'dia a dia', 'gr??os', 'b??sicos', 'dur??vel']
    },
    {
        name: 'Arroz Integral Camil 1 kg',
        image: arroz_integral_camil,
        stockAmount: 10,
        price: 5.12,
        unit: '1 kg',
        discount: 0,
        description: 'Arroz Integral Camil 1 kg',
        categories: ['nonPerishable'],
        tags: ['arroz', 'saud??vel', 'dia-a-dia', 'gr??os', 'b??sicos', 'dur??vel']
    },
]

const flour = [
    {
        name: 'Farinha de trigo tradicional Dona Benta Tipo 1 1 kg',
        image: farinha_de_trigo_dona_benta,
        stockAmount: 10,
        price: 5.12,
        unit: '1 kg',
        discount: 0,
        description: 'Farinha de trigo tradicional Dona Benta Tipo 1 1 kg',
        categories: ['nonPerishable'],
        tags: ['farinha', 'dia-a-dia', 'b??sicos', 'dur??vel']
    },
    {
        name: 'Farinha de Mandioca Fina Seca Yoki 500 g',
        image: farinha_mandioca_yoki,
        stockAmount: 10,
        price: 5.12,
        unit: '500 g',
        discount: 0,
        description: 'Farinha de Mandioca Fina Seca Yoki 500 g',
        categories: ['nonPerishable'],
        tags: ['farinha', 'dia-a-dia', 'b??sicos', 'dur??vel']
    },
]

const sugar = [
    {
        name: 'A????car Granulado Refinado Premium Olho D\'??gua 1 kg',
        image: acucar_olho_dagua,
        stockAmount: 10,
        price: 5.12,
        unit: '1 kg',
        discount: 0,
        description: 'A????car Granulado Refinado Premium Olho D\'??gua 1 kg',
        categories: ['nonPerishable'],
        tags: ['a????car', 'dia-a-dia', 'b??sicos', 'dur??vel', 'para doces']
    },
    {
        name: 'A????car Refinado Uni??o 1 kg',
        image: acucar_uniao,
        stockAmount: 10,
        price: 5.12,
        unit: '1 kg',
        discount: 0,
        description: 'A????car Refinado Uni??o 1 kg',
        categories: ['nonPerishable'],
        tags: ['a????car', 'dia-a-dia', 'b??sicos', 'dur??vel', 'para doces']
    },
    {
        name: 'A????car Refinado Especial Caravelas 1 kg',
        image: acucar_caravelas,
        stockAmount: 10,
        price: 5.12,
        unit: '1 kg',
        discount: 0,
        description: 'A????car Refinado Especial Caravelas 1 kg',
        categories: ['nonPerishable'],
        tags: ['a????car', 'dia-a-dia', 'b??sicos', 'dur??vel', 'para doces']
    },
]

const powdered = [
    {
        name: 'Caf?? instant??neo Nescaf?? 170 g',
        image: cafe_nescafe,
        stockAmount: 10,
        price: 5.12,
        unit: '170 g',
        discount: 0,
        description: 'A????car Refinado Especial Caravelas 1 kg',
        categories: ['nonPerishable'],
        tags: ['caf??', 'em p??', 'dia-a-dia', 'caf??-da-manh??', 'b??sicos', 'dur??vel']
    },
    {
        name: 'Leite em P?? Ninho 400 g',
        image: leite_em_po_ninho,
        stockAmount: 10,
        price: 5.12,
        unit: '400 g',
        discount: 0,
        description: 'Leite em P?? Ninho 400 g',
        categories: ['nonPerishable'],
        tags: ['leite', 'em p??', 'dia-a-dia', 'caf??-da-manh??', 'b??sicos', 'dur??vel']
    },
    {
        name: 'Achocolatado Toddy original 400 g',
        image: toddy_achocolatado,
        stockAmount: 10,
        price: 5.12,
        unit: '400 g',
        discount: 0,
        description: 'Achocolatado Toddy original 400 g',
        categories: ['nonPerishable'],
        tags: ['achocolatado', 'em p??', 'dia-a-dia', 'caf??-da-manh??', 'b??sicos', 'dur??vel']
    },
]

const pasta = [
    {
        name: 'Macarr??o Pena Renata 500 g',
        image: macarrao_pena_renata,
        stockAmount: 10,
        price: 5.12,
        unit: '500 g',
        discount: 0,
        description: 'Macarr??o Pena Renata 500 g',
        categories: ['nonPerishable'],
        tags: ['macarrao', 'italiano', 'dia-a-dia', 'b??sicos', 'dur??vel']
    },
    {
        name: 'Nissin L??men Sabor Galinha 80 g (tempero 5 g)',
        image: macarrao_instantaneo_nissin,
        stockAmount: 10,
        price: 5.12,
        unit: '85 g',
        discount: 0,
        description: 'Nissin L??men Sabor Galinha 80 g (tempero 5 g)',
        categories: ['nonPerishable'],
        tags: ['macarr??o', 'instant??neo', 'dia-a-dia', 'pr??tico', 'dur??vel']
    },
]

const vegetableOil = [
    {
        name: '??leo de Girassol Liza 900 mL',
        image: oleo_de_girassol_liza,
        stockAmount: 10,
        price: 5.12,
        unit: '900 mL',
        discount: 0,
        description: '??leo de Girassol Liza 900 mL',
        categories: ['nonPerishable'],
        tags: ['??leo', 'girassol', 'dia-a-dia', 'pr??tico', 'b??sicos', 'dur??vel']
    },
    {
        name: '??leo de Milho Liza 900 mL',
        image: oleo_de_milho_liza,
        stockAmount: 10,
        price: 5.12,
        unit: '900 mL',
        discount: 0,
        description: '??leo de Milho Liza 900 mL',
        categories: ['nonPerishable'],
        tags: ['??leo', 'milho', 'dia-a-dia', 'pr??tico', 'b??sicos', 'dur??vel']
    },
]

const shampoo = [
    {
        name: 'Shampoo Oxygen Moisture Dove 355 mL',
        image: shampoo_dove,
        stockAmount: 10,
        price: 5.12,
        unit: '355 mL',
        discount: 0,
        description: 'Shampoo Oxygen Moisture Dove 355 mL',
        categories: ['hygiene'],
        tags: ['shampoo', 'xampu', 'banho', 'higiene', 'dia-a-dia']
    },
    {
        name: 'Shampoo Johnson\'s Baby com ??gua purificada 200 mL',
        image: shampoo_johnson,
        stockAmount: 10,
        price: 5.12,
        unit: '200 mL',
        discount: 0,
        description: 'Shampoo Johnson\'s Baby com ??gua purificada 200 mL',
        categories: ['hygiene'],
        tags: ['shampoo', 'xampu', 'banho', 'higiene', 'dia-a-dia']
    },
]

const soap = [
    {
        name: 'Sabonete Original Dove 90 g',
        image: sabonete_dove,
        stockAmount: 10,
        price: 5.12,
        unit: '90 g',
        discount: 0,
        description: 'Sabonete Original Dove 90 g',
        categories: ['hygiene'],
        tags: ['sabonete', 'banho', 'higiene', 'dia-a-dia']
    },
    {
        name: 'Sabonete Johnson\'s ??leo de Am??ndoas 90 g',
        image: sabonete_johnson,
        stockAmount: 10,
        price: 5.12,
        unit: '90 g',
        discount: 0,
        description: 'Sabonete Johnson\'s ??leo de Am??ndoas 90 g',
        categories: ['hygiene'],
        tags: ['sabonete', 'banho', 'higiene', 'dia-a-dia']
    },
    {
        name: 'Sabonete Lux Buqu?? de Jasmim 85 g',
        image: sabonete_lux,
        stockAmount: 10,
        price: 5.12,
        unit: '85 g',
        discount: 0,
        description: 'Sabonete Lux Buqu?? de Jasmim 85 g',
        categories: ['hygiene'],
        tags: ['sabonete', 'banho', 'higiene', 'dia-a-dia']
    },
    {
        name: 'Sabonete Leite com Hidratante Nivea 125 g',
        image: sabonete_nivea,
        stockAmount: 10,
        price: 5.12,
        unit: '125 g',
        discount: 0,
        description: 'Sabonete Leite com Hidratante Nivea 125 g',
        categories: ['hygiene'],
        tags: ['sabonete', 'banho', 'higiene', 'dia-a-dia']
    },
]

const toothpaste = [
    {
        name: 'Pasta de Dente Sorriso 90 g',
        image: pasta_de_dente_sorriso,
        stockAmount: 10,
        price: 5.12,
        unit: '90 g',
        discount: 0,
        description: 'Pasta de Dente Sorriso 90 g',
        categories: ['hygiene'],
        tags: ['pasta', 'dente', 'boca', 'higiene', 'dia-a-dia']
    },
    {
        name: 'Pasta de Dente Oral-B Pro-Expert',
        image: pasta_de_dente_oralb,
        stockAmount: 10,
        price: 5.12,
        unit: '90 g',
        discount: 0,
        description: 'Pasta de Dente Oral-B Pro-Expert',
        categories: ['hygiene'],
        tags: ['pasta', 'dente', 'boca', 'higiene', 'dia-a-dia']
    },
    {
        name: 'Pasta de Dente Colgate Max Fresh 170 g',
        image: pasta_de_dente_colgate,
        stockAmount: 10,
        price: 5.12,
        unit: '90 g',
        discount: 0,
        description: 'Pasta de Dente Colgate Max Fresh 170 g',
        categories: ['hygiene'],
        tags: ['pasta', 'dente', 'boca', 'higiene', 'dia-a-dia']
    },
]

const toiletPaper = [
    {
        name: 'Papel Higi??nico Neutro Folha Dupla Neve (4 x 30 m)',
        image: papel_higienico_neve,
        stockAmount: 10,
        price: 5.12,
        unit: '4 x 30m',
        discount: 0,
        description: 'Papel Higi??nico Neutro Folha Dupla Neve (4 x 30 m)',
        categories: ['hygiene'],
        tags: ['banheiro', 'papel higi??nico', 'higiene', 'dia-a-dia']
    },
    {
        name: 'Papel Higi??nico Ultra Folha Dupla Elite (4 x 30 m)',
        image: papel_higienico_elite,
        stockAmount: 10,
        price: 5.12,
        unit: '4 x 30m',
        discount: 0,
        description: 'Papel Higi??nico Ultra Folha Dupla Elite (4 x 30 m)',
        categories: ['hygiene'],
        tags: ['banheiro', 'papel higi??nico', 'higiene', 'dia-a-dia']
    },
]

const cleaning = [
    {
        name: '??gua Sanit??ria Yp?? Cloro Ativo 3 2 L',
        image: agua_sanitaria_ype,
        stockAmount: 10,
        price: 5.12,
        unit: '2L',
        discount: 0,
        description: '??gua Sanit??ria Yp?? Cloro Ativo 3 2 L',
        categories: ['cleaning'],
        tags: ['limpeza', 'faxina', 'desinfetante']
    },
    {
        name: 'Ajax Fresh Lemon 500 mL',
        image: ajax_fresh_lemon,
        stockAmount: 10,
        price: 5.12,
        unit: '500 mL',
        discount: 0,
        description: 'Ajax Fresh Lemon 500 mL',
        categories: ['cleaning'],
        tags: ['limpeza', 'faxina', 'casa brilhando']
    },
    {
        name: 'Sab??o Para Roupas Concentrado Ariel 630 mL',
        image: sabao_ariel,
        stockAmount: 10,
        price: 5.12,
        unit: '630 mL',
        discount: 0,
        description: 'Sab??o Para Roupas Concentrado Ariel 630 mL',
        categories: ['cleaning'],
        tags: ['limpeza', 'roupas', 'sab??o']
    },
]

const productsData = [
    ...fruit, ...coldCut, ...bread, ...canned, ...grain, ...flour, ...sugar,
    ...powdered, ...pasta, ...vegetableOil, ...shampoo, ...soap,
    ...toothpaste, ...toiletPaper, ...cleaning
]

// export default productsData;

const sections = {
    all:
    [
        {
            title: 'Para sua sobreviv??ncia',
            tags: ['gr??os', 'macarr??o', 'p??o', 'enlatado', 'em p??', 'frios'],
            categories: ['nonPerishable']
        },
        {
            title: 'Mantenha-se limpo',
            tags: ['papel higi??nico', 'pasta de dente', 'sabonete', 'shampoo', 'xampu'],
            categories: ['hygiene']
        },
        {
            title: 'Para cuidar do seu lar',
            tags: ['limpeza', 'casa brilhando'],
            categories: ['cleaning']
        },
        {
            title: 'Para voc??, chef',
            tags: ['??leo vegetal', 'farinha', 'a????car', 'macarr??o'],
            categories: ['nonPerishable']
        },
        {
            title: 'Perfeitos para os amantes de massa',
            tags: ['macarr??o', 'p??o'],
            categories: ['nonPerishable']
        },
        {
            title: 'Ah, que frios...',
            tags: ['frios'],
            categories: ['perishable']
        },
        {
            title: 'Porque sa??de ?? constante',
            tags: ['fruta', 'saud??vel'],
            categories: ['perishable']
        }
    ]
}

sections.perishable = sections.all.filter(s => s.categories.includes('perishable'))
sections.nonPerishable = sections.all.filter(s => s.categories.includes('nonPerishable'))
sections.cleaning = sections.all.filter(s => s.categories.includes('cleaning'))
sections.hygiene = sections.all.filter(s => s.categories.includes('hygiene'))

export default sections;