-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-02-2017 a las 12:45:00
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 7.0.9

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
(1, 'General');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `id` int(11) NOT NULL,
  `id_categoria` int(20) NOT NULL,
  `Contenido` varchar(200) NOT NULL,
  `TipoPregunta` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id`, `id_categoria`, `Contenido`, `TipoPregunta`) VALUES
(1, 1, '¿Que edad tienes?', 'radio'),
(2, 1, '¿Cómo es la casa en la que vives?', 'radio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

CREATE TABLE `respuestas` (
  `id` int(11) NOT NULL,
  `id_pregunta` int(20) NOT NULL,
  `Contenido` varchar(200) NOT NULL,
  `ValorHuella` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`id`, `id_pregunta`, `Contenido`, `ValorHuella`) VALUES
(1, 1, 'Menos de 16 años', 0),
(2, 1, 'Entre 17 y 36', 0),
(3, 1, 'Entre 37 y 56', 0),
(4, 1, 'Entre 57 y 76', 0),
(5, 1, 'Más de 76', 0),
(6, 2, 'Un chalet o vivienda aislada', 0),
(7, 2, 'Un adosado', 0),
(8, 2, 'Una vivienda en un bloque de pisos', 0),
(9, 2, 'Una vivienda en una manzana de casas.', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestasusuario`
--

CREATE TABLE `respuestasusuario` (
  `Id` int(11) NOT NULL,
  `Id_usuario` int(20) NOT NULL,
  `ID_Respuesta` int(11) NOT NULL,
  `Contenido` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `respuestasusuario`
--

INSERT INTO `respuestasusuario` (`Id`, `Id_usuario`, `ID_Respuesta`, `Contenido`) VALUES
(1, 1, 3, ''),
(2, 1, 2, ''),
(3, 2, 2, '3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(20) NOT NULL,
  `comunidad autonoma` enum('Andalucia','Aragon','Cantabria','Castilla y Leon','Castilla-La Mancha','Cataluña','Ceuta','Comunidad de Madrid','Comunidad Valenciana','Extremadura','Galicia','Islas Baleares','Islas Canarias','La Rioja','Navarra','Pais Vasco','Principado de Asturias','Region de Murcia') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `respuestasusuario`
--
ALTER TABLE `respuestasusuario`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `respuestasusuario`
--
ALTER TABLE `respuestasusuario`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
