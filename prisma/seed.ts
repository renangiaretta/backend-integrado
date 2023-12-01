import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedDatabase = async () => {
    const seed = await prisma.course.findMany();
    if (seed.length === 0) {
        await Promise.all(
            allCourses.map(async (course) => {
                await prisma.course.create({
                    data: course,
                });
            }),
        );
        console.log('Seed database complete');
    } else {
        console.log('Database already seeded');
    }
    return prisma;
};

seedDatabase()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

interface ICourse {
    name: string;
    description: string;
    modality: string;
    type: string;
    duration: number;
    price: number;
    image: string;
}

export const allCourses: ICourse[] = [
    {
        name: 'Medicina',
        description:
            'Descubra o fascinante mundo da medicina através do nosso curso excepcionalmente projetado, onde o conhecimento se funde com a prática para formar os líderes de saúde do amanhã. Embarque em uma jornada educacional transformadora, onde você explorará as complexidades do corpo humano, compreenderá as últimas inovações médicas e desenvolverá habilidades clínicas cruciais. O nosso programa de Medicina é ministrado por uma equipe de professores apaixonados e experientes, dedicados a proporcionar uma educação de classe mundial. Nossas instalações de última geração oferecem laboratórios avançados, salas de aula interativas e experiências práticas em ambientes clínicos simulados, garantindo uma aprendizagem imersiva e prática. Ao longo do curso, você se envolverá em estudos de caso da vida real, participará de estágios clínicos e trabalhará em colaboração com profissionais de saúde experientes. Você também terá a oportunidade de se especializar em áreas específicas da medicina, permitindo que você explore suas paixões e construa uma base sólida para sua carreira futura. Além do currículo acadêmico robusto, enfatizamos valores éticos, comunicação eficaz e compaixão. Preparamos nossos estudantes não apenas para serem especialistas em medicina, mas também para serem líderes compassivos e comprometidos com o bem-estar da comunidade. Junte-se a nós no desafio de transformar vidas e fazer uma diferença significativa na área da saúde. Seja parte de uma comunidade acadêmica vibrante, onde a inovação, a excelência e o compromisso com a saúde global são aprimorados. Escolha o nosso Curso de Medicina e trilhe o caminho para uma carreira gratificante e impactante na área médica.',
        modality: 'Presencial',
        type: 'Graduação',
        duration: 60,
        price: 20000.0,
        image: 'https://imagens.grupointegrado.br/img/banners/1648498063000000.jpg',
    },
    {
        name: 'Direito',
        description:
            'Descubra o fascinante universo da Administração em nosso curso meticulosamente projetado, onde teoria e prática se entrelaçam para formar os futuros líderes no campo dos negócios. Embarque em uma jornada educacional transformadora, onde você mergulhará nos fundamentos da gestão, compreenderá as últimas tendências empresariais e desenvolverá habilidades essenciais para enfrentar os desafios corporativos contemporâneos. Nosso programa de Administração é liderado por uma equipe de professores apaixonados e experientes, comprometidos em proporcionar uma educação de classe mundial. Contamos com instalações de última geração, incluindo salas de aula interativas, laboratórios de negócios equipados e experiências práticas em ambientes empresariais simulados, garantindo uma aprendizagem imersiva e prática. Ao longo do curso, você se envolverá em estudos de caso reais, participará de projetos práticos e colaborará com profissionais experientes do setor. Terá a oportunidade de se especializar em áreas específicas da administração, permitindo que explore suas paixões e construa uma base sólida para sua carreira futura. Além do currículo acadêmico sólido, enfatizamos habilidades de liderança, comunicação eficaz e compreensão ética dos princípios empresariais. Preparamos nossos estudantes não apenas para serem especialistas em administração, mas também para serem líderes éticos e inovadores comprometidos com a excelência empresarial. Junte-se a nós no desafio de transformar empresas e fazer uma diferença impactante no campo da administração. Faça parte de uma comunidade acadêmica vibrante, onde a inovação, a excelência e o compromisso com o sucesso empresarial são cultivados. Escolha o nosso Curso de Administração e trace o caminho para uma carreira gratificante e influente no mundo dos negócios.',
        modality: 'EAD',
        type: 'Graduação',
        duration: 48,
        price: 25000.0,
        image: 'https://imagens.grupointegrado.br/img/banners/1648496497000000.jpg',
    },
    {
        name: 'Administração',
        description:
            'Descubra o fascinante universo da Administração em nosso curso meticulosamente projetado, onde teoria e prática se entrelaçam para formar os futuros líderes no campo dos negócios. Embarque em uma jornada educacional transformadora, onde você mergulhará nos fundamentos da gestão, compreenderá as últimas tendências empresariais e desenvolverá habilidades essenciais para enfrentar os desafios corporativos contemporâneos.Nosso programa de Administração é liderado por uma equipe de professores apaixonados e experientes, comprometidos em proporcionar uma educação de classe mundial. Contamos com instalações de última geração, incluindo salas de aula interativas, laboratórios de negócios equipados e experiências práticas em ambientes empresariais simulados, garantindo uma aprendizagem imersiva e prática. Ao longo do curso, você se envolverá em estudos de caso reais, participará de projetos práticos e colaborará com profissionais experientes do setor. Terá a oportunidade de se especializar em áreas específicas da administração, permitindo que explore suas paixões e construa uma base sólida para sua carreira futura. Além do currículo acadêmico sólido, enfatizamos habilidades de liderança, comunicação eficaz e compreensão ética dos princípios empresariais. Preparamos nossos estudantes não apenas para serem especialistas em administração, mas também para serem líderes éticos e inovadores comprometidos com a excelência empresarial. Junte-se a nós no desafio de transformar empresas e fazer uma diferença impactante no campo da administração. Faça parte de uma comunidade acadêmica vibrante, onde a inovação, a excelência e o compromisso com o sucesso empresarial são cultivados. Escolha o nosso Curso de Administração e trace o caminho para uma carreira gratificante e influente no mundo dos negócios.',
        modality: 'Presencial',
        type: 'Graduação',
        duration: 48,
        price: 15000.0,
        image: 'https://imagens.grupointegrado.br/img/banners/1649363119000000.png',
    },
    {
        name: 'Enfermagem',
        description:
            'Descubra o fascinante universo da Enfermagem em nosso curso cuidadosamente projetado, onde a teoria se encontra com a prática para formar os futuros profissionais de saúde. Embarque em uma jornada educacional transformadora, onde você mergulhará nas complexidades do cuidado com a saúde, compreenderá as últimas inovações na área e desenvolverá habilidades clínicas cruciais. Nosso programa de Enfermagem é liderado por uma equipe de instrutores apaixonados e experientes, dedicados a proporcionar uma educação de classe mundial. Dispomos de instalações de última geração, incluindo laboratórios avançados, salas de aula interativas e experiências práticas em ambientes clínicos simulados, garantindo uma aprendizagem imersiva e prática. Ao longo do curso, você se envolverá em estudos de casos reais, participará de estágios clínicos e colaborará com profissionais de saúde experientes. Terá a oportunidade de se especializar em áreas específicas da enfermagem, permitindo que explore suas paixões e construa uma base sólida para sua carreira futura. Além do currículo acadêmico sólido, enfatizamos valores éticos, habilidades de comunicação empática e compaixão. Preparamos nossos estudantes não apenas para serem especialistas em enfermagem, mas também para serem líderes compassivos e comprometidos com o bem-estar da comunidade. Junte-se a nós no desafio de transformar vidas e fazer uma diferença significativa na área da saúde. Faça parte de uma comunidade acadêmica dinâmica, onde a inovação, a excelência e o compromisso com o cuidado global são cultivados. Escolha o nosso Curso de Enfermagem e trace o caminho para uma carreira gratificante e impactante no campo da saúde.',
        modality: 'EAD',
        type: 'Graduação',
        duration: 48,
        price: 30000.0,
        image: 'https://imagens.grupointegrado.br/img/banners/1648497306000000.jpg',
    },
    {
        name: 'Biologia',
        description:
            'Descubra os mistérios da vida em nosso curso de Biologia meticulosamente projetado, onde a teoria se entrelaça com a prática para moldar os futuros cientistas e pesquisadores. Embarque em uma jornada educacional emocionante, onde você mergulhará nos fundamentos da biologia, compreenderá as últimas descobertas científicas e desenvolverá habilidades práticas essenciais. Nosso programa de Biologia é liderado por uma equipe de instrutores dedicados e experientes, comprometidos em proporcionar uma educação de classe mundial. Contamos com instalações de última geração, incluindo laboratórios especializados, salas de aula interativas e experiências práticas em ambientes científicos simulados, garantindo uma aprendizagem imersiva e prática. Ao longo do curso, você se envolverá em experimentos práticos, participará de pesquisas científicas e colaborará com professores especializados. Terá a oportunidade de se especializar em áreas específicas da biologia, permitindo que explore suas paixões e construa uma base sólida para sua carreira futura. Além do currículo acadêmico robusto, enfatizamos a importância da pesquisa independente, da ética científica e da compreensão global das interações biológicas. Preparamos nossos estudantes não apenas para serem especialistas em biologia, mas também para serem líderes comprometidos com a inovação e a sustentabilidade. Junte-se a nós no desafio de explorar os segredos da vida e fazer uma diferença significativa no campo da biologia. Faça parte de uma comunidade acadêmica vibrante, onde a curiosidade, a excelência e o compromisso com a pesquisa científica são cultivados. Escolha o nosso Curso de Biologia e trace o caminho para uma carreira gratificante e impactante na ciência.',
        modality: 'Presencial',
        type: 'Graduação',
        duration: 48,
        price: 30000.0,
        image: 'https://imagens.grupointegrado.br/img/banners/1648497306000000.jpg',
    },
    {
        name: 'Agronomia',
        description:
            'Descubra o vasto mundo da Agronomia em nosso curso cuidadosamente projetado, onde a teoria se encontra com a prática para formar os futuros profissionais na área agrícola. Embarque em uma jornada educacional emocionante, onde você mergulhará nos fundamentos da agricultura, compreenderá as últimas inovações agronômicas e desenvolverá habilidades práticas essenciais. Nosso programa de Agronomia é liderado por uma equipe de instrutores experientes e dedicados, comprometidos em proporcionar uma educação de classe mundial. Dispomos de instalações de última geração, incluindo fazendas experimentais, laboratórios agrícolas e experiências práticas em ambientes agrícolas simulados, garantindo uma aprendizagem imersiva e prática. Ao longo do curso, você se envolverá em práticas agrícolas reais, participará de projetos de pesquisa e colaborará com profissionais da agricultura. Terá a oportunidade de se especializar em áreas específicas da Agronomia, permitindo que explore suas paixões e construa uma base sólida para sua carreira futura. Além do currículo acadêmico sólido, enfatizamos a importância da sustentabilidade agrícola, da gestão eficiente dos recursos e do entendimento das práticas agrícolas modernas. Preparamos nossos estudantes não apenas para serem especialistas em Agronomia, mas também para serem líderes comprometidos com o desenvolvimento sustentável e a segurança alimentar global. Junte-se a nós no desafio de alimentar o mundo e fazer uma diferença significativa no campo da Agronomia. Faça parte de uma comunidade acadêmica vibrante, onde a inovação, a excelência e o compromisso com a agricultura sustentável são cultivados. Escolha o nosso Curso de Agronomia e trace o caminho para uma carreira gratificante e impactante na agricultura.',
        modality: 'EAD',
        type: 'Pós-graduação',
        duration: 48,
        price: 30000.0,
        image: 'https://imagens.grupointegrado.br/img/banners/1648496497000000.jpg',
    },
    {
        name: 'Psicologia',
        description:
            'Adentre o intrigante mundo da Psicologia em nosso curso minuciosamente elaborado, onde a teoria se entrelaça com a prática para formar os futuros profissionais dedicados à compreensão da mente humana. Embarque em uma jornada educacional enriquecedora, onde você mergulhará nos fundamentos da psicologia, compreenderá as últimas descobertas científicas e desenvolverá habilidades práticas cruciais. Nosso programa de Psicologia é liderado por uma equipe de instrutores apaixonados e experientes, comprometidos em proporcionar uma educação de classe mundial. Contamos com instalações de última geração, incluindo laboratórios de pesquisa, salas de terapia e experiências práticas em ambientes clínicos simulados, garantindo uma aprendizagem imersiva e prática. Ao longo do curso, você se envolverá em estudos de casos reais, participará de estágios clínicos e colaborará com profissionais experientes da área. Terá a oportunidade de se especializar em áreas específicas da Psicologia, permitindo que explore suas paixões e construa uma base sólida para sua carreira futura. Além do currículo acadêmico robusto, enfatizamos a importância da empatia, comunicação efetiva e ética profissional. Preparamos nossos estudantes não apenas para serem especialistas em Psicologia, mas também para serem líderes compassivos comprometidos com o bem-estar mental e emocional da comunidade. Junte-se a nós no desafio de compreender a mente humana e fazer uma diferença significativa no campo da Psicologia. Faça parte de uma comunidade acadêmica dinâmica, onde a inovação, a excelência e o compromisso com a saúde mental são cultivados. Escolha o nosso Curso de Psicologia e trace o caminho para uma carreira gratificante e impactante no universo do comportamento humano.',
        modality: 'Presencial',
        type: 'Graduação',
        duration: 48,
        price: 45000.0,
        image: 'https://imagens.grupointegrado.br/img/banners/1648496822000000.jpg',
    },
    {
        name: 'Odontologia',
        description:
            'Adentre o empolgante universo da Odontologia em nosso curso meticulosamente planejado, onde a arte e a ciência se encontram para formar os futuros profissionais dedicados à saúde bucal. Embarque em uma jornada educacional enriquecedora, onde você mergulhará nos fundamentos da odontologia, compreenderá as últimas tecnologias odontológicas e desenvolverá habilidades práticas essenciais. Nosso programa de Odontologia é liderado por uma equipe de instrutores apaixonados e experientes, comprometidos em proporcionar uma educação de classe mundial. Dispomos de instalações de última geração, incluindo clínicas odontológicas equipadas, laboratórios especializados e experiências práticas em ambientes simulados, garantindo uma aprendizagem imersiva e prática. Ao longo do curso, você se envolverá em práticas odontológicas reais, participará de estágios clínicos e colaborará com profissionais experientes do setor. Terá a oportunidade de se especializar em áreas específicas da Odontologia, permitindo que explore suas paixões e construa uma base sólida para sua carreira futura. Além do currículo acadêmico robusto, enfatizamos a importância da ética odontológica, comunicação efetiva com os pacientes e compreensão holística da saúde bucal. Preparamos nossos estudantes não apenas para serem especialistas em Odontologia, mas também para serem líderes comprometidos com a saúde oral e o bem-estar global. Junte-se a nós no desafio de promover sorrisos saudáveis e fazer uma diferença significativa no campo da Odontologia. Faça parte de uma comunidade acadêmica dinâmica, onde a inovação, a excelência e o compromisso com a saúde bucal são cultivados. Escolha o nosso Curso de Odontologia e trace o caminho para uma carreira gratificante e impactante no cuidado da saúde oral.',
        modality: 'Presencial',
        type: 'Pós-graduação',
        duration: 48,
        price: 30000.0,
        image: 'https://imagens.grupointegrado.br/img/banners/1648551737000000.jpg',
    },
    {
        name: 'Análise e Desenvolvimento de Sistemas',
        description:
            'Adentre o dinâmico mundo da tecnologia em nosso curso minuciosamente projetado em Análise e Desenvolvimento de Sistemas (ADS), onde a teoria se alia à prática para formar os futuros profissionais que impulsionarão a revolução digital. Embarque em uma jornada educacional emocionante, onde você mergulhará nos fundamentos da análise de sistemas, compreenderá as últimas tendências tecnológicas e desenvolverá habilidades práticas essenciais. Nosso programa de ADS é liderado por uma equipe de instrutores apaixonados e experientes, comprometidos em proporcionar uma educação de classe mundial. Dispomos de laboratórios de informática avançados, salas de aula equipadas com tecnologia de ponta e experiências práticas em projetos simulados, garantindo uma aprendizagem imersiva e prática. Ao longo do curso, você se envolverá em projetos de desenvolvimento de software reais, participará de desafios práticos e colaborará com profissionais experientes da área. Terá a oportunidade de se especializar em áreas específicas da Análise e Desenvolvimento de Sistemas, permitindo que explore suas paixões e construa uma base sólida para sua carreira futura. Além do currículo acadêmico robusto, enfatizamos a importância da inovação, da resolução de problemas e da colaboração em equipe. Preparamos nossos estudantes não apenas para serem especialistas em ADS, mas também para serem líderes comprometidos com a evolução contínua da tecnologia. Junte-se a nós no desafio de moldar o futuro digital e fazer uma diferença significativa na área de Análise e Desenvolvimento de Sistemas. Faça parte de uma comunidade acadêmica dinâmica, onde a criatividade, a excelência e o compromisso com a tecnologia são cultivados. Escolha o nosso Curso de ADS e trace o caminho para uma carreira gratificante e impactante no universo da computação.',
        modality: 'EAD',
        type: 'Graduação',
        duration: 48,
        price: 30000.0,
        image: '',
    },
    {
        name: 'Engenharia Elétrica',
        description:
            'Adentre o empolgante campo da Engenharia Elétrica em nosso curso meticulosamente elaborado, onde a teoria encontra a prática para formar os futuros engenheiros dedicados à inovação e ao desenvolvimento tecnológico. Embarque em uma jornada educacional emocionante, onde você explorará os princípios fundamentais da engenharia elétrica, compreenderá as mais recentes tecnologias e desenvolverá habilidades práticas essenciais. Nosso programa de Engenharia Elétrica é liderado por uma equipe de instrutores apaixonados e experientes, comprometidos em proporcionar uma educação de classe mundial. Contamos com laboratórios equipados com tecnologia de ponta, salas de aula interativas e experiências práticas em projetos simulados, garantindo uma aprendizagem imersiva e prática. Ao longo do curso, você se envolverá em projetos reais de engenharia elétrica, participará de experimentos práticos e colaborará com profissionais experientes da área. Terá a oportunidade de se especializar em áreas específicas da Engenharia Elétrica, permitindo que explore suas paixões e construa uma base sólida para sua carreira futura. Além do currículo acadêmico robusto, enfatizamos a importância da inovação, da resolução de problemas e da sustentabilidade. Preparamos nossos estudantes não apenas para serem especialistas em Engenharia Elétrica, mas também para serem líderes comprometidos com o avanço tecnológico e o impacto positivo na sociedade. Junte-se a nós no desafio de transformar ideias em realidade e fazer uma diferença significativa no campo da Engenharia Elétrica. Faça parte de uma comunidade acadêmica dinâmica, onde a excelência, a criatividade e o compromisso com a inovação são cultivados. Escolha o nosso Curso de Engenharia Elétrica e trace o caminho para uma carreira gratificante e impactante no mundo da tecnologia.',
        modality: 'Presencial',
        type: 'Pós-graduação',
        duration: 48,
        price: 30000.0,
        image: 'https://imagens.grupointegrado.br/img/banners/1649363119000000.png',
    },
];
