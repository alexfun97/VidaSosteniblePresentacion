-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-06-2017 a las 09:52:51
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectovidasostenible`
--
CREATE DATABASE IF NOT EXISTS `proyectovidasostenible` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `proyectovidasostenible`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
`id` int(11) NOT NULL,
`Nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `Nombre`) VALUES
(1, 'General'),
(2, 'Energia'),
(3, 'Transporte'),
(4, 'Agua'),
(5, 'Materiales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
`id` int(11) NOT NULL,
`id_categoria` int(20) NOT NULL,
`Contenido` varchar(200) NOT NULL,
`TipoPregunta` int(20) NOT NULL,
`posicion` int(11) NOT NULL,
`idPadre` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `id_categoria`, `Contenido`, `TipoPregunta`, `posicion`, `idPadre`) VALUES
(1, 1, 'Pais', 1, 0, NULL),
(2, 1, 'CCAA/Región', 1, 0, NULL),
(3, 1, 'Nivel de ingresos familiar anual en rangos de:', 3, 0, NULL),
(4, 1, 'Formación:', 3, 0, NULL),
(5, 1, 'Profesión o área de conocimiento:', 3, 0, NULL),
(6, 1, '¿Qué edad tienes?', 3, 0, NULL),
(7, 1, '¿Cómo es la casa en la que vives? (Si tienes varias casas, tu domicilio principal)', 3, 0, NULL),
(8, 1, '¿Cuántas personas viven en tu hogar?', 3, 0, NULL),
(9, 1, 'Indica el espacio de que dispones en metros cuadrados', 3, 0, NULL),
(10, 2, '¿Cuántos elementos de calefacción tienes en casa? (cuenta todos los radiadores, estufas, etc.)', 3, 0, NULL),
(11, 2, '¿Tu sistema de calefacción es central o individual?', 3, 0, NULL),
(12, 2, 'Marca el número de radiadores:', 3, 0, NULL),
(13, 2, 'Si tienes, marca los meses en que tienes encendida la calefacción:', 2, 0, NULL),
(14, 2, '¿Tienes una instalación de aire acondicionado?', 3, 0, NULL),
(15, 2, 'Si tienes, marca los meses en los que utilizas el aire acondicionado:', 2, 0, NULL),
(16, 2, 'Si tienes calefacción y/o aire acondicionado y puedes regular la temperatura a voluntad, ¿Cuál es tu estilo de uso de la climatización?', 3, 0, NULL),
(17, 2, '¿Tienes dobles ventanas, o ventanas con doble cristal?', 3, 0, NULL),
(18, 2, '¿Tienes algún electrodoméstico con etiqueta energética \\\"A\\\" (o superior, A+, A++, A+++)', 3, 0, NULL),
(19, 3, '¿Qué vehículos usas por lo general para tus desplazamientos? (Marca más de uno si es necesario)', 2, 0, NULL),
(20, 3, '¿Cuánto tiempo tardas en desplazarte a tu trabajo o tu centro educativo? Si marcaste varias opciones en la pregunta anterior, señala el tiempo que tardas en la opción más rápida)', 3, 0, NULL),
(21, 3, 'Si tienes coche ¿cómo es de grande?', 3, 0, NULL),
(22, 3, 'Marca esta casilla si tu vehículo es eléctrico o híbrido:', 3, 0, NULL),
(23, 3, 'Marca esta casilla si compraste tu coche hace más de diez años:', 3, 0, NULL),
(24, 3, '¿Vas solo en tu coche?', 3, 0, NULL),
(25, 3, '¿Con qué frecuencia haces la compra?', 3, 0, NULL),
(26, 4, '¿Cuál es tu relación con las plantas?', 3, 0, NULL),
(27, 4, 'Si tienes muchas plantas para regar, ¿empleas algún sistema de riego economizador?', 3, 0, NULL),
(28, 4, '¿Cuántos elementos economizadores de agua hay instalados en la fontanería de tu casa? (doble tecla en WC, botón de parada a voluntad, perlizadores o aeradores en grifos, etc.)', 3, 0, NULL),
(29, 5, '¿Intentas evitar la compra de productos marcados con estas indicaciones?', 3, 0, NULL),
(30, 5, '¿Cuál es tu relación con la carne?', 3, 0, NULL),
(31, 5, '¿Hay alguna de estas cosas en tu domicilio?', 2, 0, NULL),
(32, 5, '¿Cómo sueles comprar los alimentos?', 3, 0, NULL),
(33, 1, 'Indica tu sexo:', 3, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntasextra`
--

CREATE TABLE `preguntasextra` (
`id` int(11) NOT NULL,
`idPregunta` int(11) NOT NULL,
`idRespuesta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preguntasextra`
--

INSERT INTO `preguntasextra` (`id`, `idPregunta`, `idRespuesta`) VALUES
(1, 11, 51),
(2, 12, 51),
(3, 13, 51),
(4, 15, 59),
(5, 16, 59),
(6, 16, 51),
(7, 21, 68),
(8, 22, 68),
(9, 23, 68),
(10, 24, 68),
(11, 22, 69),
(16, 27, 94),
(17, 27, 95);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

CREATE TABLE `respuestas` (
`id` int(11) NOT NULL,
`id_pregunta` int(20) NOT NULL,
`Contenido` varchar(200) NOT NULL,
`ValorHuella` int(11) DEFAULT NULL,
`id_textoRespuestas` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`id`, `id_pregunta`, `Contenido`, `ValorHuella`, `id_textoRespuestas`) VALUES
(1, 1, 'España', NULL, NULL),
(2, 2, 'Andalucia', NULL, NULL),
(3, 2, 'Aragon', NULL, NULL),
(4, 2, 'Cantabria', NULL, NULL),
(5, 2, 'Castilla y Leon', NULL, NULL),
(6, 2, 'Castilla-La Mancha', NULL, NULL),
(7, 2, 'Cataluña', NULL, NULL),
(8, 2, 'Ceuta', NULL, NULL),
(9, 2, 'Comunidad de Madrid', NULL, NULL),
(10, 2, 'Comunidad Valenciana', NULL, NULL),
(11, 2, 'Extremadura', NULL, NULL),
(12, 2, 'Galicia', NULL, NULL),
(13, 2, 'Islas Baleares', NULL, NULL),
(14, 2, 'Islas Canarias', NULL, NULL),
(15, 2, 'La Rioja', NULL, NULL),
(16, 2, 'Navarra', NULL, NULL),
(17, 2, 'Pais Vasco', NULL, NULL),
(18, 2, 'Principado de Asturias', NULL, NULL),
(19, 2, 'Region de Murcia', NULL, NULL),
(20, 2, 'Melilla', NULL, NULL),
(21, 3, 'Hasta 5.000', NULL, NULL),
(22, 3, 'Entre 5000 y 10000', NULL, NULL),
(23, 3, 'Entre 10000 y 20000', NULL, NULL),
(24, 3, 'Entre 20000 y 40000', NULL, NULL),
(25, 3, 'Mas de 40000', NULL, NULL),
(26, 4, 'Primer grado (educación obligatoria)', NULL, NULL),
(27, 4, 'Segundo grado (bachillerato o equivalente)', NULL, NULL),
(28, 4, 'Tercer grado (estudios universitarios)', NULL, NULL),
(29, 5, 'Artes y humanidades', NULL, NULL),
(30, 5, 'Ciencia e ingeniería', NULL, NULL),
(31, 5, 'Ciencias de la salud', NULL, NULL),
(32, 5, 'Ciencias sociales y jurídicas\r\n', NULL, NULL),
(33, 5, 'Otros\r\n', NULL, NULL),
(34, 6, 'Menos de 16\r\n', NULL, 1),
(35, 6, 'Entre 17 y 36\r\n', NULL, 1),
(36, 6, 'Entre 37 y 56\r\n', NULL, 1),
(37, 6, 'de 57 a 76\r\n', NULL, 1),
(38, 6, 'Más de 76\r\n', NULL, 1),
(39, 7, 'Chalet o vivienda aislada\r\n', NULL, 2),
(40, 7, 'Adosado\r\n', NULL, 3),
(41, 7, 'Vivienda en bloque de pisos\r\n', NULL, 4),
(42, 7, 'Vivienda en manzana de casa\r\n', NULL, 5),
(43, 8, 'Una\r\n', NULL, 6),
(44, 8, 'Dos\r\n', NULL, 7),
(45, 8, 'Tres\r\n', NULL, 7),
(46, 8, 'Más de tres\r\n', NULL, 8),
(47, 9, 'Menos de 60 m2\r\n', NULL, 9),
(48, 9, 'Entre 61 y 120 m2\r\n', NULL, 10),
(49, 9, 'Más de 121 m2\r\n', NULL, 11),
(50, 10, 'No tengo ninguno\r\n', 0, 12),
(51, 10, 'Tengo alguna estufa o calefactor móvil', 2, 13),
(52, 10, 'Radiadores fijos', NULL, NULL),
(53, 11, 'Central, común para todo el edificio\r\n', 5, 14),
(54, 11, 'Individual, solo para mi vivienda\r\n', 7, 15),
(55, 12, '1 o 2\r\n', 1, 16),
(56, 12, '3 a 5 \r\n', 2, 16),
(57, 12, '6 o más\r\n', 3, 16),
(58, 14, 'No', 0, 18),
(59, 14, 'Si\r\n', 9, 19),
(60, 16, 'Bien calentito y helado\r\n', 3, 21),
(61, 16, 'Intermedias\r\n', 1, 22),
(62, 16, 'Moderado\r\n', -2, 23),
(63, 17, 'Si', -2, 24),
(64, 17, 'No', 2, 25),
(65, 18, 'Si', -1, 26),
(66, 18, 'No', 1, 27),
(67, 18, 'No lo se\r\n', 1, 27),
(68, 19, 'Coche\r\n', 6, 28),
(69, 19, 'Moto\r\n', 3, 29),
(70, 19, 'Otros vehículos urbanos: segway, urban wheel, patinete eléctrico, etc.', 1, 30),
(71, 19, 'Metro, tren o autobús', 1, 31),
(72, 19, 'Voy en bicicleta\r\n', 0, 32),
(73, 19, 'Camino\r\n', 0, 33),
(74, 20, 'Menos de 10 minutos', 0, NULL),
(75, 20, 'De 10 a 30 minutos', 1, NULL),
(76, 20, 'De media a una hora\r\n', 0, NULL),
(77, 20, 'Más de una hora\r\n', 3, NULL),
(78, 21, 'Es un utilitario muy pequeño', 2, 34),
(79, 21, 'Es un coche de tamaño intermedio', 4, 35),
(80, 21, 'Es un SUV o un todoterreno\r\n', 8, 36),
(81, 22, 'Sí, es un eléctrico\r\n', -3, 37),
(82, 22, 'No', 0, NULL),
(83, 23, 'Sí, lo compré hace más de diez años\r\n', 2, 38),
(84, 23, 'Otra\r\n', 0, NULL),
(85, 24, 'Siempre\r\n', 3, 39),
(86, 24, 'Intermedias\r\n', 1, 40),
(87, 24, 'Nunca\r\n', -1, 41),
(88, 25, 'Todos los días\r\n', -1, 42),
(89, 25, 'Intermedias\r\n', 1, 43),
(90, 25, 'Una vez al mes\r\n', 3, 44),
(91, 26, 'No hay plantas en mi casa', 0, 45),
(92, 26, 'Unas pocas macetas', 1, 46),
(93, 26, 'Tengo algunas jardineras\r\n', 7, 46),
(94, 26, 'Un jardincito ', 10, 47),
(95, 26, 'Disfruto de un gran jardín con césped', 15, 47),
(96, 27, 'Si', -5, NULL),
(97, 27, 'No', 7, 48),
(98, 28, 'Ninguno\r\n', 3, 49),
(99, 28, 'Uno', 1, 49),
(100, 28, 'Varios\r\n', -2, 50),
(101, 29, 'Si\r\n', 1, 51),
(102, 29, 'No', 3, 52),
(103, 29, 'Nunca me he fijado\r\n', 2, 53),
(104, 30, 'Soy fanático de los chuletones', 9, 54),
(105, 30, 'Intermedio', 5, 55),
(106, 30, 'Soy egano\r\n', 2, 56),
(107, 31, 'Ninguna\r\n', 7, 57),
(108, 31, 'Una o dos\r\n', 3, 58),
(109, 31, 'Tres o cuatro\r\n', 1, 59),
(110, 32, 'Compro alimentos frescos y a granel \r\n', 2, 60),
(111, 32, 'Intermedias\r\n', 4, 61),
(112, 32, 'Compro comida procesada y empaquetada', 6, 62),
(113, 33, 'Femenino', NULL, NULL),
(114, 33, 'Masculino', NULL, NULL),
(115, 13, 'Enero', NULL, NULL),
(116, 13, 'Febrero', NULL, NULL),
(117, 13, 'Marzo', NULL, NULL),
(118, 13, 'Abril', NULL, NULL),
(119, 13, 'Mayo', NULL, 17),
(120, 13, 'Junio', NULL, 17),
(121, 13, 'Julio', NULL, 17),
(122, 13, 'Agosto', NULL, 17),
(123, 13, 'Septiembre', NULL, 17),
(124, 13, 'Octubre', NULL, NULL),
(125, 13, 'Noviembre', NULL, NULL),
(126, 13, 'Diciembre', NULL, NULL),
(127, 15, 'Enero', 0, NULL),
(128, 15, 'Febrero', NULL, NULL),
(129, 15, 'Marzo', NULL, NULL),
(130, 15, 'Abril', NULL, NULL),
(131, 15, 'Mayo', NULL, NULL),
(132, 15, 'Junio', NULL, 65),
(133, 15, 'Julio', NULL, 65),
(134, 15, 'Agosto', NULL, 65),
(135, 15, 'Septiembre', NULL, 65),
(136, 15, 'Octubre', NULL, NULL),
(137, 15, 'Noviembre', NULL, NULL),
(138, 15, 'Diciembre', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestasusuario`
--

CREATE TABLE `respuestasusuario` (
`Id` int(11) NOT NULL,
`Id_usuario` int(20) NOT NULL,
`ID_Respuesta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `respuestasusuario`
--

INSERT INTO `respuestasusuario` (`Id`, `Id_usuario`, `ID_Respuesta`) VALUES
(1, 6, 1),
(2, 6, 12),
(3, 6, 22),
(4, 6, 26),
(5, 6, 33),
(6, 6, 38),
(7, 6, 39),
(8, 6, 44),
(9, 6, 48),
(10, 6, 51),
(11, 6, 61),
(12, 6, 64),
(13, 6, 67),
(14, 6, 73),
(15, 6, 88),
(16, 6, 93),
(17, 6, 97),
(18, 6, 99),
(19, 6, 103),
(20, 6, 105),
(21, 6, 108),
(22, 6, 111),
(23, 5, 1),
(24, 5, 16),
(25, 5, 25),
(26, 5, 27),
(27, 5, 30),
(28, 5, 37),
(29, 5, 39),
(30, 5, 46),
(31, 5, 49),
(32, 5, 52),
(33, 5, 54),
(34, 5, 57),
(35, 5, 59),
(36, 5, 61),
(37, 5, 63),
(38, 5, 65),
(39, 5, 68),
(40, 5, 75),
(41, 5, 80),
(42, 5, 82),
(43, 5, 84),
(44, 5, 85),
(45, 5, 89),
(46, 5, 95),
(47, 5, 96),
(48, 5, 100),
(49, 5, 101),
(50, 5, 105),
(51, 5, 109),
(52, 5, 111),
(53, 6, 113),
(54, 5, 113),
(55, 7, 1),
(56, 7, 14),
(57, 7, 23),
(58, 7, 28),
(59, 7, 31),
(60, 7, 36),
(61, 7, 39),
(62, 7, 44),
(63, 7, 47),
(64, 7, 113),
(65, 7, 50),
(66, 7, 58),
(67, 7, 63),
(68, 7, 65),
(69, 7, 73),
(70, 7, 74),
(71, 7, 88),
(72, 7, 91),
(73, 7, 100),
(74, 7, 101),
(75, 7, 106),
(76, 7, 109),
(77, 7, 110),
(78, 1, 1),
(79, 1, 9),
(80, 1, 22),
(81, 1, 27),
(82, 1, 33),
(83, 1, 37),
(84, 1, 41),
(85, 1, 44),
(86, 1, 47),
(87, 1, 52),
(88, 1, 53),
(89, 1, 56),
(90, 1, 58),
(91, 1, 61),
(92, 1, 63),
(93, 1, 65),
(94, 1, 71),
(95, 1, 75),
(96, 1, 89),
(97, 1, 92),
(98, 1, 98),
(99, 1, 103),
(100, 1, 104),
(101, 1, 108),
(102, 1, 111),
(103, 2, 1),
(104, 2, 5),
(105, 2, 22),
(106, 2, 26),
(107, 2, 33),
(108, 2, 37),
(109, 2, 39),
(110, 2, 43),
(111, 2, 48),
(112, 2, 51),
(113, 2, 58),
(114, 2, 64),
(115, 2, 66),
(116, 2, 68),
(117, 2, 74),
(118, 2, 80),
(119, 2, 82),
(120, 2, 84),
(121, 2, 85),
(122, 2, 89),
(123, 2, 94),
(124, 2, 97),
(125, 2, 99),
(126, 2, 103),
(127, 2, 105),
(128, 2, 109),
(129, 2, 110),
(130, 3, 1),
(131, 3, 9),
(132, 3, 25),
(133, 3, 28),
(134, 3, 30),
(135, 3, 35),
(136, 3, 40),
(137, 3, 45),
(138, 3, 48),
(139, 3, 52),
(140, 3, 54),
(141, 3, 57),
(142, 3, 59),
(143, 3, 60),
(144, 3, 63),
(145, 3, 65),
(146, 3, 68),
(147, 3, 76),
(148, 3, 79),
(149, 3, 82),
(150, 3, 84),
(151, 3, 86),
(152, 3, 89),
(153, 3, 94),
(154, 3, 96),
(155, 3, 100),
(156, 3, 101),
(157, 3, 105),
(158, 3, 109),
(159, 3, 111),
(160, 4, 1),
(161, 4, 7),
(162, 4, 25),
(163, 4, 28),
(164, 4, 30),
(165, 4, 35),
(166, 4, 40),
(167, 4, 46),
(168, 4, 48),
(169, 4, 52),
(170, 4, 54),
(171, 4, 57),
(172, 4, 59),
(173, 4, 61),
(174, 4, 63),
(175, 4, 65),
(176, 4, 68),
(177, 4, 75),
(178, 4, 79),
(179, 4, 81),
(180, 4, 84),
(181, 4, 85),
(182, 4, 89),
(183, 4, 93),
(184, 4, 96),
(185, 4, 100),
(186, 4, 101),
(187, 4, 105),
(188, 4, 109),
(189, 4, 111),
(190, 1, 125),
(192, 1, 126),
(193, 1, 115),
(194, 1, 116),
(195, 1, 117),
(196, 3, 125),
(197, 3, 126),
(198, 3, 115),
(199, 3, 116),
(200, 3, 117),
(201, 3, 133),
(202, 3, 134),
(203, 4, 125),
(204, 4, 126),
(205, 4, 115),
(206, 4, 116),
(207, 4, 117),
(208, 4, 133),
(209, 4, 134),
(210, 5, 124),
(211, 5, 125),
(212, 5, 126),
(213, 5, 115),
(214, 5, 116),
(215, 5, 117),
(216, 5, 118),
(217, 8, 112),
(218, 9, 21),
(219, 9, 28),
(220, 9, 30),
(221, 10, 50),
(222, 10, 53),
(223, 10, 57),
(224, 11, 22),
(225, 11, 26),
(226, 11, 69),
(227, 11, 75),
(228, 11, 81),
(229, 11, 83),
(230, 11, 88),
(231, 12, 22),
(232, 12, 26),
(233, 12, 69),
(234, 12, 75),
(235, 12, 81),
(236, 12, 83),
(237, 12, 88),
(238, 14, 22),
(239, 14, 26),
(240, 14, 69),
(241, 14, 75),
(242, 14, 81),
(243, 14, 83),
(244, 14, 88),
(245, 15, 22),
(246, 15, 26),
(247, 15, 69),
(248, 15, 75),
(249, 15, 81),
(250, 15, 83),
(251, 15, 88),
(252, 16, 22),
(253, 16, 26),
(254, 16, 69),
(255, 16, 75),
(256, 16, 81),
(257, 16, 83),
(258, 16, 88),
(259, 17, 22),
(260, 17, 26),
(261, 17, 92),
(262, 17, 96),
(263, 17, 99),
(264, 17, 69),
(265, 17, 75),
(266, 17, 81),
(267, 17, 83),
(268, 17, 88),
(269, 17, 101),
(270, 17, 105),
(271, 18, 52),
(272, 18, 53),
(273, 18, 56),
(274, 18, 117),
(275, 18, 125),
(276, 18, 58),
(277, 18, 61),
(278, 18, 63),
(279, 18, 65),
(280, 18, 92),
(281, 18, 97),
(282, 18, 98),
(283, 18, 71),
(284, 18, 75),
(285, 18, 89),
(286, 18, 103),
(287, 18, 104),
(288, 18, 108),
(289, 18, 111),
(290, 19, 52),
(291, 19, 53),
(292, 19, 56),
(293, 19, 117),
(294, 19, 125),
(295, 19, 58),
(296, 19, 61),
(297, 19, 63),
(298, 19, 65),
(299, 19, 92),
(300, 19, 97),
(301, 19, 98),
(302, 19, 71),
(303, 19, 75),
(304, 19, 89),
(305, 19, 103),
(306, 19, 104),
(307, 19, 108),
(308, 19, 111),
(309, 20, 52),
(310, 20, 53),
(311, 20, 56),
(312, 20, 117),
(313, 20, 125),
(314, 20, 58),
(315, 20, 61),
(316, 20, 63),
(317, 20, 65),
(318, 20, 92),
(319, 20, 97),
(320, 20, 98),
(321, 20, 71),
(322, 20, 75),
(323, 20, 89),
(324, 20, 103),
(325, 20, 104),
(326, 20, 108),
(327, 20, 111),
(328, 21, 92),
(329, 21, 96),
(330, 21, 99),
(331, 21, 68),
(332, 21, 74),
(333, 21, 79),
(334, 21, 81),
(335, 21, 83),
(336, 21, 87),
(337, 21, 88),
(338, 22, 92),
(339, 22, 96),
(340, 22, 99),
(341, 22, 68),
(342, 22, 74),
(343, 22, 79),
(344, 22, 81),
(345, 22, 83),
(346, 22, 87),
(347, 22, 88),
(348, 23, 92),
(349, 23, 96),
(350, 23, 99),
(351, 23, 68),
(352, 23, 74),
(353, 23, 79),
(354, 23, 81),
(355, 23, 83),
(356, 23, 87),
(357, 23, 88),
(358, 24, 92),
(359, 24, 96),
(360, 24, 99),
(361, 24, 68),
(362, 24, 74),
(363, 24, 79),
(364, 24, 81),
(365, 24, 83),
(366, 24, 87),
(367, 24, 88),
(368, 25, 92),
(369, 25, 96),
(370, 25, 99),
(371, 25, 68),
(372, 25, 74),
(373, 25, 79),
(374, 25, 81),
(375, 25, 83),
(376, 25, 87),
(377, 25, 88),
(378, 26, 92),
(379, 26, 96),
(380, 26, 99),
(381, 26, 68),
(382, 26, 74),
(383, 26, 79),
(384, 26, 81),
(385, 26, 83),
(386, 26, 87),
(387, 26, 88),
(388, 27, 92),
(389, 27, 96),
(390, 27, 99),
(391, 27, 68),
(392, 27, 74),
(393, 27, 79),
(394, 27, 81),
(395, 27, 83),
(396, 27, 87),
(397, 27, 88),
(398, 28, 92),
(399, 28, 96),
(400, 28, 99),
(401, 28, 68),
(402, 28, 74),
(403, 28, 79),
(404, 28, 81),
(405, 28, 83),
(406, 28, 87),
(407, 28, 88),
(408, 29, 92),
(409, 29, 96),
(410, 29, 99),
(411, 29, 68),
(412, 29, 74),
(413, 29, 79),
(414, 29, 81),
(415, 29, 83),
(416, 29, 87),
(417, 29, 88),
(418, 30, 92),
(419, 30, 96),
(420, 30, 99),
(421, 30, 68),
(422, 30, 74),
(423, 30, 79),
(424, 30, 81),
(425, 30, 83),
(426, 30, 87),
(427, 30, 88),
(428, 31, 92),
(429, 31, 96),
(430, 31, 99),
(431, 31, 68),
(432, 31, 74),
(433, 31, 79),
(434, 31, 81),
(435, 31, 83),
(436, 31, 87),
(437, 31, 88),
(438, 32, 92),
(439, 32, 96),
(440, 32, 99),
(441, 32, 68),
(442, 32, 74),
(443, 32, 79),
(444, 32, 81),
(445, 32, 83),
(446, 32, 87),
(447, 32, 88),
(448, 33, 92),
(449, 33, 96),
(450, 33, 99),
(451, 33, 68),
(452, 33, 74),
(453, 33, 79),
(454, 33, 81),
(455, 33, 83),
(456, 33, 87),
(457, 33, 88),
(458, 34, 92),
(459, 34, 96),
(460, 34, 99),
(461, 34, 68),
(462, 34, 74),
(463, 34, 79),
(464, 34, 81),
(465, 34, 83),
(466, 34, 87),
(467, 34, 88),
(468, 35, 92),
(469, 35, 96),
(470, 35, 99),
(471, 35, 68),
(472, 35, 74),
(473, 35, 79),
(474, 35, 81),
(475, 35, 83),
(476, 35, 87),
(477, 35, 88),
(478, 36, 92),
(479, 36, 96),
(480, 36, 99),
(481, 36, 68),
(482, 36, 74),
(483, 36, 79),
(484, 36, 81),
(485, 36, 83),
(486, 36, 87),
(487, 36, 88),
(488, 37, 92),
(489, 37, 96),
(490, 37, 99),
(491, 37, 68),
(492, 37, 74),
(493, 37, 79),
(494, 37, 81),
(495, 37, 83),
(496, 37, 87),
(497, 37, 88),
(498, 38, 92),
(499, 38, 96),
(500, 38, 99),
(501, 38, 68),
(502, 38, 74),
(503, 38, 79),
(504, 38, 81),
(505, 38, 83),
(506, 38, 87),
(507, 38, 88),
(508, 39, 92),
(509, 39, 96),
(510, 39, 99),
(511, 39, 68),
(512, 39, 74),
(513, 39, 79),
(514, 39, 81),
(515, 39, 83),
(516, 39, 87),
(517, 39, 88),
(518, 40, 92),
(519, 40, 96),
(520, 40, 99),
(521, 40, 68),
(522, 40, 74),
(523, 40, 79),
(524, 40, 81),
(525, 40, 83),
(526, 40, 87),
(527, 40, 88),
(528, 41, 92),
(529, 41, 96),
(530, 41, 99),
(531, 41, 68),
(532, 41, 74),
(533, 41, 79),
(534, 41, 81),
(535, 41, 83),
(536, 41, 87),
(537, 41, 88),
(538, 42, 92),
(539, 42, 96),
(540, 42, 99),
(541, 42, 68),
(542, 42, 74),
(543, 42, 79),
(544, 42, 81),
(545, 42, 83),
(546, 42, 87),
(547, 42, 88),
(548, 45, 22),
(549, 45, 27),
(550, 45, 50),
(551, 45, 53),
(552, 45, 56),
(553, 45, 116),
(554, 45, 117),
(555, 45, 136),
(556, 45, 137),
(557, 45, 60),
(558, 45, 64),
(559, 45, 66),
(560, 45, 71),
(561, 45, 76),
(562, 45, 78),
(563, 45, 81),
(564, 45, 84),
(565, 46, 51),
(566, 46, 53),
(567, 46, 55),
(568, 49, 48),
(569, 49, 113),
(570, 49, 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `textoinformativo`
--

CREATE TABLE `textoinformativo` (
`id` int(11) NOT NULL,
`texto` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `textoinformativo`
--

INSERT INTO `textoinformativo` (`id`, `texto`) VALUES
(1, 'La huella ecológica a lo largo de la edad parece tener forma de campana, siendo máxima en la edad adulta y disminuyendo hacia atrás, cuando somos preadultos, y hacia adelante, cuando somos ancianos. ¡Descontando la impresionante huella ecológica de los niños en su primer año de vida, solamente en pañales de usar y tirar!'),
(2, 'Al vivir en una vivienda aislada, tu huella ecológica tiende a ser mayor. Necesitarás más energía para calentar la casa en comparación con un piso rodeado de otras viviendas, por ejemplo. También es probable que consumas más agua y que gastes más en transporte para ir y venir de tu casa. \r\nPero también hay una parte positiva: al disponer de abundante espacio, puedes reducir tu huella ecológica drásticamente instalando paneles solares en el tejado, un sistema para acopiar el agua, un compostador para reciclar los restos de alimentos… y muchas otras cosas.'),
(3, 'Los adosados suelen ser mayores que los pisos, por lo que su huella ecológica también suele ser mayor. Por ejemplo, gastan más energía en calentar la casa. Pero también ofrecen la posibilidad de reducir drásticamente tu huella ecológica instalando un sistema de energía renovable (agua caliente solar, por ejemplo) en el tejado, un compostador en el jardín, etc.'),
(4, 'Disponer de servicios comunes de agua y energía reduce mucho la huella ecológica de las viviendas dentro de un bloque de pisos. No obstante, las necesidades de energía variarán mucho según cuál sea la posición del piso en el edificio y su orientación. Por ejemplo, no es lo mismo un bajo orientado al norte que un último piso o un ático orientado al sur, que garantiza una fuerte insolación y tal vez problemas para mantener la casa fresca en verano.'),
(5, 'Un piso dentro de una manzana de casas suele tener un consumo más reducido de energía para climatización, aunque eso varía mucho con la localización de la vivienda, si es exterior o interior, en un piso alto o bajo, y su orientación. Los edificios antiguos de muros gruesos ofrecen un buen aislamiento, lo que reduce las necesidades de calefacción.'),
(6, 'Vivir solo es una opción que cada vez más personas adoptan, independientemente de los motivos. Ten en cuenta que en esta caso el tamaño de tu huella ecológica se multiplica, y eso sucede en todos los aspectos: consumo de energía, agua, transporte, consumo de alimentos, producción de residuos, etc. Pero hay un lado positivo: vivir solo te permite organizarte al detalle, para reducir tu huella de la manera en que tú exactamente determines.'),
(7, 'Estás próximo al tamaño medio de los hogares en España, que es de 2,5 personas. Eso implica que será fácil poneros de acuerdo para reducir el tamaño de vuestra huella ecológica.'),
(8, 'Las viviendas habitadas por muchas personas suelen producir resultados de huella ecológica por persona reducidos, al compartir los recursos de energía, agua, alimentos, etc. Por ejemplo, permiten una compra de alimentos basada en productos frescos y en la adquisición de cantidades elevadas, lo que reduce el desperdicio y la producción de residuos. Pero eso depende mucho de las costumbres de las personas que habitan la casa.'),
(9, 'Las viviendas pequeñas tienen ventajas: son más fáciles de climatizar y de limpiar con un consumo reducido de agua y energía, por ejemplo.'),
(10, 'Una proporción muy elevada de personas en nuestro país viven en pisos de alrededor de 80 metros cuadrados (aunque el tamaño medio de la vivienda es mayor, de unos 140 m2, pero eso incluye viviendas rurales). El consumo de energía y agua dependerá mucho del equipamiento de la vivienda (por ejemplo si tiene o carece de aislamiento) y de las costumbres de sus moradores.'),
(11, 'Las casas grandes, como la tuya, pueden ser grandes sumideros de energía. Por ejemplo, si necesitan más de siete u ocho radiadores de calefacción. Es una buena oportunidad para revisar si están colocados los termostatos necesarios, si paredes y techos están bien aislados, etc.'),
(12, 'A no ser que vivas en una zona extremadamente cálida (las Islas Canarias) la carencia de cualquier sistema de calefacción indica un serio problema de pobreza energética. La pobreza energética es una lacra de nuestra sociedad que debe ser combatida. Aquí tienes ideas para encontrar soluciones, para tí o para otras personas.'),
(13, 'En climas suaves (Costas del sur y Levante y las islas) uno o dos elementos móviles de calefacción bien usados pueden ser suficientes. En climas más duros, esa escasez de elementos calefactores puede indicar un problema de pobreza energética. La pobreza energética es una lacra de nuestra sociedad que debe ser combatida. Aquí tienes ideas para encontrar soluciones, para tí o para otras personas.'),
(14, 'Un sistema de calefacción central implica una huella ecológica reducida con un buen nivel de confort. Cuanto mayor sea el sistema (algunos abarcan barrios enteros) mayor será su eficiencia y el ahorro por cada vivienda servida.'),
(15, 'Un sistema de calefacción individual te permite un control absoluto del gasto. Podrás ahorrar mucho dinero y energía si mejoras el aislamiento de tu vivienda.'),
(16, 'Recuerda que es obligatoria la instalación de repartidores de gastos de calefacción en todos los radiadores de las viviendas con calefacción central. Consisten en termostatos y reguladores que se añaden a los radiadores ya existentes (lo que puede no ser fácil en modelos viejos). Eso implica que pagarás el calor que consumas de verdad, no una estimación a prorrateo.'),
(17, 'La temporada oficial de encendido de calefacciones la fijan los ayuntamientos, y suele ir de octubre a abril. O vives en una zona de alta montaña extremadamente fría, o eres realmente friolero…'),
(18, 'Existen infinidad de soluciones para refrigerar nuestra casa en los meses de canícula sin necesidad de gastar dinero en una costosa instalación de aire acondicionado. Refrescar la casa al amanecer, evitar la entrada del sol, usar ventiladores y evaporadores, son algunas de ellas.'),
(19, 'El aire acondicionado de compresor puede ser una necesidad en determinadas situaciones, pero debería ser usado con parsimonia. Hay muchas soluciones para refrescar nuestra casa mucho más baratas y muy eficaces. NOTA: no instales el compresor del aire acondicionado en el patio de ventilación de tu edificio. Debe ser instalado en la azotea o el tejado. ¡No conviertas la vida de tus vecinos en una cálida y ruidosa pesadilla!'),
(21, 'En esto del clima, te gusta ir a contracorriente. Lo malo es que estás tirando el dinero, derrochando energía y contribuyendo directamente al calentamiento global. Y también hinchando desmesuradamente el tamaño de tu huella ecológica.'),
(22, '¿Sabías que puedes reducir sustancialmente tu factura de calefacción y aire acondicionado con acciones sencillas, muchas de ellas sin coste?'),
(23, 'Tu habilidoso comportamiento con la climatización contribuye a reducir tu huella ecológica y también te hace ahorrar mucho dinero. '),
(24, 'Si no lo has hecho todavía, es el momento de mejorar el aislamiento de tu casa. Dispones de soluciones adaptadas a todas las necesidades y para todos los bolsillos.'),
(25, 'Las ventanas de tu casa son sumideros por donde se escapa la energía que tan cara te cuesta. Pero tranquilo, que hay soluciones. Si no puedes llegar a instalar dobles ventanas o dobles cristales, un poco de bricolaje impedirá las peores fugas.'),
(26, 'Cuantas más “Aes” y más “+” tengan tus aparatos, menor será tu huella energética. Eso sin contar el ahorro de dinero en la factura de la luz.'),
(27, 'Si ninguno de tus electromésticos tiene etiqueta energética clase A, comienza por el frigorífico. Si no es clase “A” o no tiene etiqueta energética de ninguna clase, lo más seguro es que sea un modelo antiguo que está derrochando energía las 24 horas del día. Si es de tamaño estándar te saldrá a cuenta cambiarlo por un modelo clase A+++ y si es posible de tamaño menor. Lo amortizarás en cuatro o cinco años.'),
(28, 'El coche de motor de combustión es la opción más cara y más contaminante que existe para el transporte. Investiga otras opciones si quieres reducir el tamaño de tu huella ecológica y mejorar la vida de tus vecinos (por ejemplo, dejando de envenenarles con los gases que salen del tubo de escapa de tu vehículo.'),
(29, 'La moto (mejor si es pequeña y mejor todavía si es eléctrica) es una opción menos mala para el transporte: ocupa menos espacio y contamina menos. Recuerda: ¡Cuidado con el ruido!'),
(30, 'Eres un pionero usando uno de los llamados VLUEs (Vehículo Ligero Urbano Eléctrico). Son una novedad, pero van a triunfar. Máxima movilidad con el mínimo peso y espacio ocupado.'),
(31, 'Utilizas la mejor opción de transporte, la más barata y menos contaminante. Sácale todo el partido al transporte público: consulta su disponibilidad de horarios y servicios. Lo más sencillo es usar Google Maps, haz clic en el botón “Cómo llegar” y en el icono de transporte público.'),
(32, 'Usando la bicicleta para tu movilidad cotidiana, ahorras mucho dinero, no molestas a nadie con ruido, humos y ocupación de la vía pública y además tu salud mejora notablemente. Sin duda, la bicicleta es el vehículo del futuro en la ciudad.'),
(33, 'Caminar no es una excentricidad, es otra opción para la movilidad en las ciudades. Al igual que en el caso de la bicicleta, ahorras mucho dinero, ni molestas a nadie con ruido, humos y ocupación de la vía pública y además tu salud mejora notablemente. Y no necesitas comprar ningún vehículo: eres tú mismo.'),
(34, 'No hagas mucho caso de la publicidad de coches ecológicos. El principal factor que determina el consumo del vehículo es el tamaño: coche pequeño, coche economizador y menos contaminador.'),
(35, '¿Has pensado en pasarte a la movilidad eléctrica? Cada vez hay más modelos y a mejores precios.'),
(36, 'Es evidente que para tí el coche no un mero medio de transporte, sino algo más. Te chiflan los SUV, los todocaminos, los motores de 400 cv y los cromados. Todo eso está muy bien, siempre que uses tu súpervehículo fuera de la ciudad.  Recuerda que tu huella ecológica se dispara si usas un cochazo para tu movimiento cotidiano.'),
(37, 'Tu coche es eléctrico o híbrido. Enhorabuena, acabas de dar un gran paso para reducir tu huella ecológica.'),
(38, 'Intenta usar tu viejo coche los menos posible, es una verdadera fábrica de contaminantes.'),
(39, 'Te gusta ir solo en tu coche, disfrutando de la intimidad de tu salón privado con ruedas en mitad del atasco. Habría menos atascos si lo compartieras, por cierto. Ir solo en tu coche multiplica tu huella ecológica.'),
(40, 'Compartes tu coche con regularidad, puedes hacerlo con más frecuencia y más seguridad utilizado estas apps.'),
(41, 'Eres aficionado a compartir tu coche, ¿has pensado afiliarte a un sistema de coche compartido o “car sharing”?'),
(42, 'Eres de los que disfrutan yendo a la compra a diario, seguramente conoces todas las tiendas de tu barrio. Es una manera estupenda de comprar, tiras menos comida porque acumulas menos y encuentras oportunidades en precio y calidad imposibles de descubrir de otra manera.'),
(43, 'Ir a la compra con frecuencia y en tiendas próximas a tu domicilio estimula el comercio local y te permite ahorrar dinero y buscar las mejores calidades de los productos.'),
(44, 'Tu pauta de ir a la compra es abrupta: una vez cada varias semanas, coges el coche, conduces hasta el centro comercial y llenas varios carritos hasta los topes. Tienes un arcón congelador de gran capacidad y un frigorífico de dos puertas, pero eso no evita que la posibilidad de que tengas que tirar comida sea mayor que si hicieras la compra con más frecuencia.'),
(45, 'Una cosa es ahorrar agua, y otra no tener ni una triste planta en casa. Las plantas alegran la vista, purifican el aire y amortiguan la temperatura. Tener un par de macetas no cuesta nada y no ocupa sitio.'),
(46, 'Como la mayoría de los seres humanos, disfrutas de las plantas, ya sea en algunas macetas o en un pequeño jardín. Recuerda que el consumo de agua de una casa está en relación directa con la cantidad de plantas que cuidas: practica el riego economizador.'),
(47, 'Tienes un hermoso jardín, pero también un problema de derroche de agua si no has instalado ya un sistema de riego por goteo y algún temporizador. Infórmate aquí. Si de verdad tienes césped inglés y en tu región no llueve los bastante para mantenerlo fresco de manera natural, prueba a cubrir el terreno con plantas autóctonas.'),
(48, 'Ya estás tardando para ir a tu proveedor de habitual de útiles de jardinería para contratar algún sistema de riego economizador, apropiado para el tamaño de tu vergel. Ahorrarás agua y algo de dinero, pero lo principal es que alejarás la amenaza de una posible sequía.'),
(49, 'La ausencia de elementos economizadores de agua en la fontanería de tu casa te está haciendo perder dinero y lo peor de todo, derrochar inútilmente gran cantidad de agua potable valiosa.'),
(50, 'Enhorabuena, parece que tienes controlada la fontanería de tu casa con la instalación de varios artilugios economizadores de agua. No olvides hacer un uso prudente del WC, el principal elemento de consumo de agua en una casa.'),
(51, 'No te gustan las calaveras ni los peces muertos en las etiquetas de los productos de limpieza o bricolage que compras. Es una buena costumbre, porque todo lo que es tóxico para el medio ambiente también lo es para tí'),
(52, 'No te preocupa demasiado la composición de los productos de limpieza y bricolaje que compras. Deberías reducir la adquisición de limpiadores y quitagrasas muy agresivos, insecticidas tóxicos, etc.'),
(53, 'Si no te fijabas en los símbolos de productos peligrosos, aquí tienes los nueve usados oficialmente. Intenta evitar los productos que los lleven en su etiqueta.'),
(54, 'Eres adicto a la carne, lo cual no es bueno para nadie. Resulta muy cara (es el principal gasto en comida, en España), no es bueno comerla en exceso y dispara tu huella ecológica. Producir carne es un importante contribuyente al calentamiento global.'),
(55, 'Como la mayoría de la gente combinas la carne con las verduras para obtener una dieta sana. Reducir tu consumo de carne te permitirá comprarla de mejor calidad y reducir mucho tu huella ecológica. Utiliza las recetas tradicionales para hacer sabrosos guisos con una proporción de carne / vegetales adecuada (por ejemplo, 25% de carne y 75% de vegetales)'),
(56, 'Tu opción, el veganismo, es la de cada vez más gente. Indudablemente es la que tiene una huella ecológica más reducida.'),
(57, 'Sinceramente, te faltan algunas habilidades para ser un buen vecino. No te importa mezclar todos los residuos de tu casa en la misma bolsa y tirarla al contenedor más próximo (esperemos que no la dejes en la calle). Así multiplicas tu huella ecológica, al convertir una potencial colección de residuos separados valiosos (de plástico, vidrio, papel, etc.), en basura mezclada sin valor.'),
(58, 'Algo sí separas, por ejemplo, el papel y cartón o el vidrio. No seas gumia y añade más contenedores de separación, hasta tener la colección completa: papel, vidrio, envases ligeros, materia orgánica y otros especiales (pilas, lámparas, etc.)'),
(59, 'Enhorabuena, se te da bien eso de la separación doméstica de residuos. Aprende más trucos para separar mejor todavía aquí.'),
(60, 'Tu hábito de comprar la comida fresca y sin envasar te permite ahorrar mucho dinero, producir muchos menos residuos y alimentarte de la manera más sana posible.'),
(61, 'Combinas la compra de alimentos frescos con la de empaquetados, como hacemos todos. Podrás aumentar la proporción de productos frescos si te acostumbras a cocinar con más frecuencia. Ten cuidado que cocinar se puede convertir en un vicio adictivo.'),
(62, 'Tu idea de una cena es colocar dentro del microondas algo que has sacado de una caja y esperar unos minutos. Lo malo es que esa costumbre sale muy cara, es muy insana y multiplica tu huella ecológica. Prueba a comprar algo fresco de vez en cuando y cómprate un recetario de cocina.'),
(65, 'Eres un verdadero aficionado al aire acondicionado. Seguro que, cuando no hace mucho calor, puedes otras otras soluciones para refrigerar tu casa más baratas y de de huella ecológica mucho más reducida (ejemplo: un simple ventilador).');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipopregunta`
--

CREATE TABLE `tipopregunta` (
`Id` int(11) NOT NULL,
`Tipo` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipopregunta`
--

INSERT INTO `tipopregunta` (`Id`, `Tipo`) VALUES
(1, 'select'),
(2, 'checkbox'),
(3, 'radio'),
(4, 'text');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
`id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20),
(21),
(22),
(23),
(24),
(25),
(26),
(27),
(28),
(29),
(30),
(31),
(32),
(33),
(34),
(35),
(36),
(37),
(38),
(39),
(40),
(41),
(42),
(43),
(44),
(45),
(46),
(47),
(48),
(49),
(50);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
ADD PRIMARY KEY (`id`),
ADD KEY `TipoPregunta` (`TipoPregunta`),
ADD KEY `id_categoria` (`id_categoria`),
ADD KEY `idPadre` (`idPadre`);

--
-- Indices de la tabla `respuestas`
--
ALTER TABLE `respuestas`
ADD PRIMARY KEY (`id`),
ADD KEY `id_pregunta` (`id_pregunta`);

--
-- Indices de la tabla `respuestasusuario`
--
ALTER TABLE `respuestasusuario`
ADD PRIMARY KEY (`Id`),
ADD KEY `Id_usuario` (`Id_usuario`),
ADD KEY `ID_Respuesta` (`ID_Respuesta`);

--
-- Indices de la tabla `textoinformativo`
--
ALTER TABLE `textoinformativo`
ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipopregunta`
--
ALTER TABLE `tipopregunta`
ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT de la tabla `respuestas`
--
ALTER TABLE `respuestas`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;
--
-- AUTO_INCREMENT de la tabla `respuestasusuario`
--
ALTER TABLE `respuestasusuario`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=571;
--
-- AUTO_INCREMENT de la tabla `textoinformativo`
--
ALTER TABLE `textoinformativo`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
ADD CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`TipoPregunta`) REFERENCES `tipopregunta` (`Id`),
ADD CONSTRAINT `preguntas_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`),
ADD CONSTRAINT `preguntas_ibfk_3` FOREIGN KEY (`idPadre`) REFERENCES `respuestas` (`id`);

--
-- Filtros para la tabla `respuestas`
--
ALTER TABLE `respuestas`
ADD CONSTRAINT `respuestas_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `preguntas` (`id`);

--
-- Filtros para la tabla `respuestasusuario`
--
ALTER TABLE `respuestasusuario`
ADD CONSTRAINT `respuestasusuario_ibfk_1` FOREIGN KEY (`Id_usuario`) REFERENCES `usuarios` (`id`),
ADD CONSTRAINT `respuestasusuario_ibfk_2` FOREIGN KEY (`ID_Respuesta`) REFERENCES `respuestas` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
