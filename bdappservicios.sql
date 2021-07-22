-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 22-07-2021 a las 01:40:21
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdappservicios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `nombre` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `cuit` bigint(20) NOT NULL,
  `telefono` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `email_cliente` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `id_localidad` int(11) NOT NULL,
  `id_categoria_iva` int(11) NOT NULL,
  `direccion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at_cli` datetime DEFAULT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `nombre`, `cuit`, `telefono`, `email_cliente`, `id_localidad`, `id_categoria_iva`, `direccion`, `created_at`, `updated_at`, `deleted_at_cli`, `id_user`) VALUES
(47, 'Consorcio SANCOR V', 20339626724, '4565452', 'marquezemiliano1988@gmail.com', 1, 2, '25 de mayo 1221', '2021-07-02 11:32:06', '2021-07-16 11:19:07', NULL, 1),
(48, 'Kilbel Sucursal 22', 21548521212, '45594258', 'kilbel22@gmail.com', 1, 1, 'Corrientes 2769', '2021-07-13 11:44:46', NULL, NULL, 1),
(49, 'NUevo Cliente', 20339626724, '45654521', 'mailgustavo@gmail.com', 1, 2, '25 de mayo 1221', '2021-07-15 10:32:09', '2021-07-15 11:52:15', '2021-07-15 11:52:15', 1),
(50, 'tes123', 20339626724, '231646', 'mailgustavo@gmail.com', 2, 1, '25 de mayo 2525', '2021-07-15 11:06:58', '2021-07-15 11:52:01', '2021-07-15 11:52:01', 1),
(51, 'Casa de Gobierno', 20339626724, '45654521', 'govmail@email.com', 1, 2, 'Amenabar 1221', '2021-07-15 11:36:10', '2021-07-16 11:18:53', NULL, 1),
(52, 'Centro Civico', 30203654789, '3425942333', 'centrocivic@gmail.com', 1, 1, 'San Martin 2528', '2021-07-16 11:23:52', '2021-07-20 01:37:55', NULL, 1),
(53, 'test1', 30203654789, '3425942333', 'mailgustavo@gmail.com', 1, 1, '25 de mayo 1221', '2021-07-21 19:04:27', '2021-07-21 19:04:51', '2021-07-21 19:04:51', 1),
(54, 'test1Modificado', 30203654789, '3425942333', 'mailgustavo@gmail.com', 1, 1, '25 de mayo 1221', '2021-07-21 19:11:44', '2021-07-21 19:12:07', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `id_empleado` int(11) NOT NULL,
  `id_tipo_empleado` int(11) NOT NULL,
  `nombre` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `dni` bigint(20) NOT NULL,
  `cuit` bigint(20) DEFAULT NULL,
  `email_empleado` varchar(150) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto` varchar(300) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `precio_hora` float(5,1) DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  `id_localidad` int(11) NOT NULL,
  `direccion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at_emp` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id_empleado`, `id_tipo_empleado`, `nombre`, `telefono`, `dni`, `cuit`, `email_empleado`, `foto`, `precio_hora`, `id_user`, `id_localidad`, `direccion`, `created_at`, `updated_at`, `deleted_at_emp`) VALUES
(12, 2, 'JUAN CARLOS SANTILLAN', '154420376', 33962672, 20339626724, 'admin@admin.com', '3z9sd5c4gkrbeq6fs.png', 180.0, 1, 1, '25 de mayo 1245', '2021-07-02 11:33:04', '2021-07-19 23:09:43', NULL),
(13, 1, 'JOSE MARIA MENDEZ', '154741852', 33962672, 20339626724, 'admin@admin.com', NULL, 780.0, 1, 1, 'SALVADOR DEL CARRIL 2528', '2021-07-15 12:45:02', '2021-07-19 23:09:49', NULL),
(14, 2, 'Jose Garcia', '156852574', 33962672, 20339626724, 'admin@admin.com', NULL, 480.0, 1, 1, '25 de Mayo 1474', '2021-07-15 12:45:07', '2021-07-19 23:09:52', NULL),
(15, 2, 'Martin Alzugaray', '3425942333', 33962672, 30203654789, 'admin@admin.com', '3z9sd5fj8krbhv4cx.png', 350.0, 1, 1, '25 de mayo 1474', '2021-07-19 17:45:52', '2021-07-21 18:16:39', NULL),
(16, 2, 'Nicolas Velazquez', '3425942333', 33962672, 30203654789, 'adminmod@adminmod.com', '3z9sd5fj8krbhv4cx.png', 350.0, 1, 1, '25 de mayo DesdeForm', '2021-07-19 18:00:15', '2021-07-20 01:38:45', NULL),
(17, 2, 'empleadoDesdeForm', '3425942333', 33962672, 30203654789, 'adminmod@adminmod.com', '3z9sd5fj8krbhv4cx.png', 350.0, 1, 1, '25 de mayo DesdeForm', '2021-07-20 01:40:52', '2021-07-20 01:41:04', '2021-07-20 01:41:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `id_empresa` int(11) NOT NULL,
  `razon_social` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `email_empresa` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id_categoria_iva` int(11) NOT NULL,
  `cuit` bigint(30) NOT NULL,
  `telefono` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `id_servicio` int(11) NOT NULL,
  `id_localidad` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at_empresa` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`id_empresa`, `razon_social`, `email_empresa`, `id_categoria_iva`, `cuit`, `telefono`, `id_servicio`, `id_localidad`, `created_at`, `updated_at`, `deleted_at_empresa`) VALUES
(1, 'SOFTWARE', NULL, 1, 30203654789, '3425942333', 1, 1, '2020-11-16 17:19:04', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'MYN SERVICIOS', NULL, 1, 30155220089, '3415987456', 2, 2, '2021-04-21 15:51:23', '2021-07-16 13:59:34', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `frecuencia_horaria`
--

CREATE TABLE `frecuencia_horaria` (
  `id_frecuencia_horaria` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `hora_ingreso_lunes_semana_1` time DEFAULT NULL,
  `hora_egreso_lunes_semana_1` time DEFAULT NULL,
  `lunes_semana_1_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_martes_semana_1` time DEFAULT NULL,
  `hora_egreso_martes_semana_1` time DEFAULT NULL,
  `martes_semana_1_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_miercoles_semana_1` time DEFAULT NULL,
  `hora_egreso_miercoles_semana_1` time DEFAULT NULL,
  `miercoles_semana_1_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_jueves_semana_1` time DEFAULT NULL,
  `hora_egreso_jueves_semana_1` time DEFAULT NULL,
  `jueves_semana_1_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_viernes_semana_1` time DEFAULT NULL,
  `hora_egreso_viernes_semana_1` time DEFAULT NULL,
  `viernes_semana_1_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_sabado_semana_1` time DEFAULT NULL,
  `hora_egreso_sabado_semana_1` time DEFAULT NULL,
  `sabado_semana_1_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_domingo_semana_1` time DEFAULT NULL,
  `hora_egreso_domingo_semana_1` time DEFAULT NULL,
  `domingo_semana_1_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_lunes_semana_2` time DEFAULT NULL,
  `hora_egreso_lunes_semana_2` time DEFAULT NULL,
  `lunes_semana_2_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_martes_semana_2` time DEFAULT NULL,
  `hora_egreso_martes_semana_2` time DEFAULT NULL,
  `martes_semana_2_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_miercoles_semana_2` time DEFAULT NULL,
  `hora_egreso_miercoles_semana_2` time DEFAULT NULL,
  `miercoles_semana_2_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_jueves_semana_2` time DEFAULT NULL,
  `hora_egreso_jueves_semana_2` time DEFAULT NULL,
  `jueves_semana_2_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_viernes_semana_2` time DEFAULT NULL,
  `hora_egreso_viernes_semana_2` time DEFAULT NULL,
  `viernes_semana_2_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_sabado_semana_2` time DEFAULT NULL,
  `hora_egreso_sabado_semana_2` time DEFAULT NULL,
  `sabado_semana_2_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_domingo_semana_2` time DEFAULT NULL,
  `hora_egreso_domingo_semana_2` time DEFAULT NULL,
  `domingo_semana_2_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_lunes_semana_3` time DEFAULT NULL,
  `hora_egreso_lunes_semana_3` time DEFAULT NULL,
  `lunes_semana_3_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_martes_semana_3` time DEFAULT NULL,
  `hora_egreso_martes_semana_3` time DEFAULT NULL,
  `martes_semana_3_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_miercoles_semana_3` time DEFAULT NULL,
  `hora_egreso_miercoles_semana_3` time DEFAULT NULL,
  `miercoles_semana_3_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_jueves_semana_3` time DEFAULT NULL,
  `hora_egreso_jueves_semana_3` time DEFAULT NULL,
  `jueves_semana_3_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_viernes_semana_3` time DEFAULT NULL,
  `hora_egreso_viernes_semana_3` time DEFAULT NULL,
  `viernes_semana_3_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_sabado_semana_3` time DEFAULT NULL,
  `hora_egreso_sabado_semana_3` time DEFAULT NULL,
  `sabado_semana_3_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_domingo_semana_3` time DEFAULT NULL,
  `hora_egreso_domingo_semana_3` time DEFAULT NULL,
  `domingo_semana_3_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_lunes_semana_4` time DEFAULT NULL,
  `hora_egreso_lunes_semana_4` time DEFAULT NULL,
  `lunes_semana_4_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_martes_semana_4` time DEFAULT NULL,
  `hora_egreso_martes_semana_4` time DEFAULT NULL,
  `martes_semana_4_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_miercoles_semana_4` time DEFAULT NULL,
  `hora_egreso_miercoles_semana_4` time DEFAULT NULL,
  `miercoles_semana_4_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_jueves_semana_4` time DEFAULT NULL,
  `hora_egreso_jueves_semana_4` time DEFAULT NULL,
  `jueves_semana_4_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_viernes_semana_4` time DEFAULT NULL,
  `hora_egreso_viernes_semana_4` time DEFAULT NULL,
  `viernes_semana_4_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_sabado_semana_4` time DEFAULT NULL,
  `hora_egreso_sabado_semana_4` time DEFAULT NULL,
  `sabado_semana_4_estado` tinyint(4) NOT NULL DEFAULT '1',
  `hora_ingreso_domingo_semana_4` time DEFAULT NULL,
  `hora_egreso_domingo_semana_4` time DEFAULT NULL,
  `domingo_semana_4_estado` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  `id_usr` int(11) DEFAULT NULL,
  `asignado` tinyint(1) NOT NULL DEFAULT '0',
  `id_horario_cliente` int(11) NOT NULL COMMENT 'guardamos este id para luego de cerrar el mes buscar el horario original y resetear el registro con los horarios sin cambios '
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `frecuencia_horaria`
--

INSERT INTO `frecuencia_horaria` (`id_frecuencia_horaria`, `id_cliente`, `id_empleado`, `hora_ingreso_lunes_semana_1`, `hora_egreso_lunes_semana_1`, `lunes_semana_1_estado`, `hora_ingreso_martes_semana_1`, `hora_egreso_martes_semana_1`, `martes_semana_1_estado`, `hora_ingreso_miercoles_semana_1`, `hora_egreso_miercoles_semana_1`, `miercoles_semana_1_estado`, `hora_ingreso_jueves_semana_1`, `hora_egreso_jueves_semana_1`, `jueves_semana_1_estado`, `hora_ingreso_viernes_semana_1`, `hora_egreso_viernes_semana_1`, `viernes_semana_1_estado`, `hora_ingreso_sabado_semana_1`, `hora_egreso_sabado_semana_1`, `sabado_semana_1_estado`, `hora_ingreso_domingo_semana_1`, `hora_egreso_domingo_semana_1`, `domingo_semana_1_estado`, `hora_ingreso_lunes_semana_2`, `hora_egreso_lunes_semana_2`, `lunes_semana_2_estado`, `hora_ingreso_martes_semana_2`, `hora_egreso_martes_semana_2`, `martes_semana_2_estado`, `hora_ingreso_miercoles_semana_2`, `hora_egreso_miercoles_semana_2`, `miercoles_semana_2_estado`, `hora_ingreso_jueves_semana_2`, `hora_egreso_jueves_semana_2`, `jueves_semana_2_estado`, `hora_ingreso_viernes_semana_2`, `hora_egreso_viernes_semana_2`, `viernes_semana_2_estado`, `hora_ingreso_sabado_semana_2`, `hora_egreso_sabado_semana_2`, `sabado_semana_2_estado`, `hora_ingreso_domingo_semana_2`, `hora_egreso_domingo_semana_2`, `domingo_semana_2_estado`, `hora_ingreso_lunes_semana_3`, `hora_egreso_lunes_semana_3`, `lunes_semana_3_estado`, `hora_ingreso_martes_semana_3`, `hora_egreso_martes_semana_3`, `martes_semana_3_estado`, `hora_ingreso_miercoles_semana_3`, `hora_egreso_miercoles_semana_3`, `miercoles_semana_3_estado`, `hora_ingreso_jueves_semana_3`, `hora_egreso_jueves_semana_3`, `jueves_semana_3_estado`, `hora_ingreso_viernes_semana_3`, `hora_egreso_viernes_semana_3`, `viernes_semana_3_estado`, `hora_ingreso_sabado_semana_3`, `hora_egreso_sabado_semana_3`, `sabado_semana_3_estado`, `hora_ingreso_domingo_semana_3`, `hora_egreso_domingo_semana_3`, `domingo_semana_3_estado`, `hora_ingreso_lunes_semana_4`, `hora_egreso_lunes_semana_4`, `lunes_semana_4_estado`, `hora_ingreso_martes_semana_4`, `hora_egreso_martes_semana_4`, `martes_semana_4_estado`, `hora_ingreso_miercoles_semana_4`, `hora_egreso_miercoles_semana_4`, `miercoles_semana_4_estado`, `hora_ingreso_jueves_semana_4`, `hora_egreso_jueves_semana_4`, `jueves_semana_4_estado`, `hora_ingreso_viernes_semana_4`, `hora_egreso_viernes_semana_4`, `viernes_semana_4_estado`, `hora_ingreso_sabado_semana_4`, `hora_egreso_sabado_semana_4`, `sabado_semana_4_estado`, `hora_ingreso_domingo_semana_4`, `hora_egreso_domingo_semana_4`, `domingo_semana_4_estado`, `created_at`, `updated_at`, `deleted_at`, `id_usr`, `asignado`, `id_horario_cliente`) VALUES
(20, 52, 12, NULL, NULL, 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, NULL, NULL, 1, NULL, NULL, 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, NULL, NULL, 1, NULL, NULL, 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, NULL, NULL, 1, NULL, NULL, 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, NULL, NULL, 1, '2021-07-21 18:08:09', '2021-07-21 18:08:44', NULL, 1, 1, 24),
(21, 51, 15, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '00:00:00', '00:00:00', 1, NULL, NULL, 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '00:00:00', '00:00:00', 1, NULL, NULL, 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '00:00:00', '00:00:00', 1, NULL, NULL, 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '08:00:00', '14:00:00', 1, '00:00:00', '00:00:00', 1, NULL, NULL, 1, '2021-07-21 18:12:50', '2021-07-21 18:16:52', NULL, 1, 1, 25),
(22, 54, 14, '00:00:00', '00:00:00', 1, '00:00:00', '00:00:00', 1, '08:00:00', '19:00:00', 1, '00:00:00', '00:00:00', 1, '08:00:00', '19:00:00', 1, '00:00:00', '00:00:00', 1, '00:00:00', '00:00:00', 1, '00:00:00', '00:00:00', 1, '00:00:00', '00:00:00', 1, '08:00:00', '19:00:00', 1, '00:00:00', '00:00:00', 1, '08:00:00', '19:00:00', 1, '00:00:00', '00:00:00', 1, '00:00:00', '00:00:00', 1, '08:00:00', '17:00:00', 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, NULL, NULL, 1, '08:00:00', '17:00:00', 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, '08:00:00', '19:00:00', 1, NULL, NULL, 1, NULL, NULL, 1, '2021-07-21 19:13:08', '2021-07-21 19:31:03', NULL, 1, 1, 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario_cliente`
--

CREATE TABLE `horario_cliente` (
  `id_horario_cliente` int(11) NOT NULL,
  `hora_ingreso_lunes_semana_1` time DEFAULT NULL,
  `hora_egreso_lunes_semana_1` time DEFAULT NULL,
  `hora_ingreso_martes_semana_1` time DEFAULT NULL,
  `hora_egreso_martes_semana_1` time DEFAULT NULL,
  `hora_ingreso_miercoles_semana_1` time DEFAULT NULL,
  `hora_egreso_miercoles_semana_1` time DEFAULT NULL,
  `hora_ingreso_jueves_semana_1` time DEFAULT NULL,
  `hora_egreso_jueves_semana_1` time DEFAULT NULL,
  `hora_ingreso_viernes_semana_1` time DEFAULT NULL,
  `hora_egreso_viernes_semana_1` time DEFAULT NULL,
  `hora_ingreso_sabado_semana_1` time DEFAULT NULL,
  `hora_egreso_sabado_semana_1` time DEFAULT NULL,
  `hora_ingreso_domingo_semana_1` time DEFAULT NULL,
  `hora_egreso_domingo_semana_1` time DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` int(11) DEFAULT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_usr` int(11) NOT NULL,
  `asignado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `horario_cliente`
--

INSERT INTO `horario_cliente` (`id_horario_cliente`, `hora_ingreso_lunes_semana_1`, `hora_egreso_lunes_semana_1`, `hora_ingreso_martes_semana_1`, `hora_egreso_martes_semana_1`, `hora_ingreso_miercoles_semana_1`, `hora_egreso_miercoles_semana_1`, `hora_ingreso_jueves_semana_1`, `hora_egreso_jueves_semana_1`, `hora_ingreso_viernes_semana_1`, `hora_egreso_viernes_semana_1`, `hora_ingreso_sabado_semana_1`, `hora_egreso_sabado_semana_1`, `hora_ingreso_domingo_semana_1`, `hora_egreso_domingo_semana_1`, `created_at`, `updated_at`, `deleted_at`, `id_cliente`, `id_usr`, `asignado`) VALUES
(24, NULL, NULL, NULL, NULL, '08:00:00', '19:00:00', NULL, NULL, '08:00:00', '19:00:00', NULL, NULL, NULL, NULL, '2021-07-21 21:08:09', '2021-07-21 21:08:44', NULL, 52, 1, 1),
(25, '08:00:00', '14:00:00', '08:00:00', '14:00:00', '08:00:00', '14:00:00', '08:00:00', '14:00:00', '08:00:00', '14:00:00', '00:00:00', '00:00:00', NULL, NULL, '2021-07-21 21:12:50', '2021-07-21 21:16:52', NULL, 51, 1, 1),
(26, '08:00:00', '17:00:00', NULL, NULL, '08:00:00', '19:00:00', NULL, NULL, '08:00:00', '19:00:00', NULL, NULL, NULL, NULL, '2021-07-21 22:13:08', '2021-07-21 22:14:56', NULL, 54, 1, 1);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `horario_cliente_view`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `horario_cliente_view` (
`asignado` tinyint(1)
,`id_cliente` int(11)
,`deleted_at` int(11)
,`id_horario_cliente` int(11)
,`nombre` varchar(150)
,`LUNES` varchar(23)
,`lunes_carga` decimal(10,1)
,`MARTES` varchar(23)
,`martes_carga` decimal(10,1)
,`MIERCOLES` varchar(23)
,`miercoles_carga` decimal(10,1)
,`JUEVES` varchar(23)
,`jueves_carga` decimal(10,1)
,`VIERNES` varchar(23)
,`viernes_carga` decimal(10,1)
,`SABADO` varchar(23)
,`sabado_carga` decimal(10,1)
,`DOMINGO` varchar(23)
,`domingo_carga` decimal(10,1)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `iva_categoria`
--

CREATE TABLE `iva_categoria` (
  `id_categoria_iva` int(11) NOT NULL,
  `nombre_categoria` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `iva_categoria`
--

INSERT INTO `iva_categoria` (`id_categoria_iva`, `nombre_categoria`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'IVA RESPONSABLE INSCRIPTO', '2021-04-19 17:29:03', NULL, NULL),
(2, 'MONOTRIBUTO', '2021-04-27 17:29:03', NULL, NULL),
(3, 'IVA EXENTO', '2021-07-02 11:31:56', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `localidad`
--

CREATE TABLE `localidad` (
  `id_localidad` int(11) NOT NULL,
  `cod_postal` int(6) NOT NULL,
  `nombre_localidad` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `localidad`
--

INSERT INTO `localidad` (`id_localidad`, `cod_postal`, `nombre_localidad`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 3000, 'Santa Fe', '2021-04-12 15:55:02', NULL, NULL),
(2, 5000, 'Cordoba', '2021-04-21 15:55:02', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `mes_calendario_x_empleado_semana1`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `mes_calendario_x_empleado_semana1` (
`deleted_at` datetime
,`asignado` tinyint(1)
,`id_frecuencia_horaria` int(11)
,`nombre` varchar(150)
,`id_empleado` int(11)
,`LUNES` varchar(23)
,`lunes_carga` decimal(10,1)
,`MARTES` varchar(23)
,`martes_carga` decimal(10,1)
,`MIERCOLES` varchar(23)
,`miercoles_carga` decimal(10,1)
,`JUEVES` varchar(23)
,`jueves_carga` decimal(10,1)
,`VIERNES` varchar(23)
,`viernes_carga` decimal(10,1)
,`SABADO` varchar(23)
,`sabado_carga` decimal(10,1)
,`DOMINGO` varchar(23)
,`domingo_carga` decimal(10,1)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `mes_calendario_x_empleado_semana2`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `mes_calendario_x_empleado_semana2` (
`deleted_at` datetime
,`asignado` tinyint(1)
,`id_frecuencia_horaria` int(11)
,`nombre` varchar(150)
,`id_empleado` int(11)
,`LUNES` varchar(23)
,`lunes_carga` decimal(10,1)
,`MARTES` varchar(23)
,`martes_carga` decimal(10,1)
,`MIERCOLES` varchar(23)
,`miercoles_carga` decimal(10,1)
,`JUEVES` varchar(23)
,`jueves_carga` decimal(10,1)
,`VIERNES` varchar(23)
,`viernes_carga` decimal(10,1)
,`SABADO` varchar(23)
,`sabado_carga` decimal(10,1)
,`DOMINGO` varchar(23)
,`domingo_carga` decimal(10,1)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `mes_calendario_x_empleado_semana3`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `mes_calendario_x_empleado_semana3` (
`deleted_at` datetime
,`asignado` tinyint(1)
,`id_frecuencia_horaria` int(11)
,`nombre` varchar(150)
,`id_empleado` int(11)
,`LUNES` varchar(23)
,`lunes_carga` decimal(10,1)
,`MARTES` varchar(23)
,`martes_carga` decimal(10,1)
,`MIERCOLES` varchar(23)
,`miercoles_carga` decimal(10,1)
,`JUEVES` varchar(23)
,`jueves_carga` decimal(10,1)
,`VIERNES` varchar(23)
,`viernes_carga` decimal(10,1)
,`SABADO` varchar(23)
,`sabado_carga` decimal(10,1)
,`DOMINGO` varchar(23)
,`domingo_carga` decimal(10,1)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `mes_calendario_x_empleado_semana4`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `mes_calendario_x_empleado_semana4` (
`deleted_at` datetime
,`asignado` tinyint(1)
,`id_frecuencia_horaria` int(11)
,`nombre` varchar(150)
,`id_empleado` int(11)
,`LUNES` varchar(23)
,`lunes_carga` decimal(10,1)
,`MARTES` varchar(23)
,`martes_carga` decimal(10,1)
,`MIERCOLES` varchar(23)
,`miercoles_carga` decimal(10,1)
,`JUEVES` varchar(23)
,`jueves_carga` decimal(10,1)
,`VIERNES` varchar(23)
,`viernes_carga` decimal(10,1)
,`SABADO` varchar(23)
,`sabado_carga` decimal(10,1)
,`DOMINGO` varchar(23)
,`domingo_carga` decimal(10,1)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recordatorio`
--

CREATE TABLE `recordatorio` (
  `id` int(11) NOT NULL,
  `tipo` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `texto` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `hora_inicio` time NOT NULL,
  `hora_fin` time NOT NULL,
  `lugar` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_vencimiento` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `id_user` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `nombre_rol` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at_rol` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `nombre_rol`, `created_at`, `updated_at`, `deleted_at_rol`) VALUES
(1, 'ROOT', '2021-04-14 16:04:38', '2021-07-16 17:52:37', NULL),
(2, 'SUPERVISOR', '2021-04-15 16:07:43', NULL, NULL),
(3, 'OPERADOR', '2021-04-13 16:07:43', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `id_servicio` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `servicio`
--

INSERT INTO `servicio` (`id_servicio`, `nombre`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'LIMPIEZA', '2021-04-12 15:56:25', NULL, NULL),
(2, 'ALQUILER MAQUINAS DE CAFETERIA', '2021-04-19 15:56:25', NULL, NULL),
(3, 'SOFTWARE', '2021-04-20 17:41:55', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_empleado`
--

CREATE TABLE `tipo_empleado` (
  `id_tipo_empleado` int(11) NOT NULL,
  `tipo` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `id_usr` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `tipo_empleado`
--

INSERT INTO `tipo_empleado` (`id_tipo_empleado`, `tipo`, `id_usr`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'DE SUPERVISION', 1, '2021-04-19 18:01:45', '2021-07-20 10:58:40', NULL),
(2, 'DE SERVICIO', 1, '2021-04-19 18:01:45', '2021-07-20 10:58:43', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_user` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `telefono` varchar(150) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id_empresa` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `foto` varchar(150) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_user`, `name`, `password`, `email`, `telefono`, `id_empresa`, `id_rol`, `foto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'administrador', '$2a$10$9Z5b1cbY2XPWpiR1d5yUaOmo/35e4f72R.HvDkLygMLK9gDJL33Vu', 'admin@admin.com', '3425942333', 1, 1, '3z9sd5fj8krbhv4cx.png', '2021-04-12 15:55:02', '2021-07-21 19:35:49', NULL),
(6, 'usernuevo', '$2a$10$AeiO.qXg8gZbvv3RAwu85uRQGinRfPAxHu0pxgRDbKU8Th9YlS71K', 'usernuevo@gmail.com', NULL, 2, 2, NULL, '2021-07-20 11:01:33', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura para la vista `horario_cliente_view`
--
DROP TABLE IF EXISTS `horario_cliente_view`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `horario_cliente_view`  AS  select `horario_cliente`.`asignado` AS `asignado`,`horario_cliente`.`id_cliente` AS `id_cliente`,`horario_cliente`.`deleted_at` AS `deleted_at`,`horario_cliente`.`id_horario_cliente` AS `id_horario_cliente`,`cliente`.`nombre` AS `nombre`,concat(`horario_cliente`.`hora_ingreso_lunes_semana_1`,' a ',`horario_cliente`.`hora_egreso_lunes_semana_1`) AS `LUNES`,cast((time_to_sec(timediff(`horario_cliente`.`hora_egreso_lunes_semana_1`,`horario_cliente`.`hora_ingreso_lunes_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `lunes_carga`,concat(`horario_cliente`.`hora_ingreso_martes_semana_1`,' a ',`horario_cliente`.`hora_egreso_martes_semana_1`) AS `MARTES`,cast((time_to_sec(timediff(`horario_cliente`.`hora_egreso_martes_semana_1`,`horario_cliente`.`hora_ingreso_martes_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `martes_carga`,concat(`horario_cliente`.`hora_ingreso_miercoles_semana_1`,' a ',`horario_cliente`.`hora_egreso_miercoles_semana_1`) AS `MIERCOLES`,cast((time_to_sec(timediff(`horario_cliente`.`hora_egreso_miercoles_semana_1`,`horario_cliente`.`hora_ingreso_miercoles_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `miercoles_carga`,concat(`horario_cliente`.`hora_ingreso_jueves_semana_1`,' a ',`horario_cliente`.`hora_egreso_jueves_semana_1`) AS `JUEVES`,cast((time_to_sec(timediff(`horario_cliente`.`hora_egreso_jueves_semana_1`,`horario_cliente`.`hora_ingreso_jueves_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `jueves_carga`,concat(`horario_cliente`.`hora_ingreso_viernes_semana_1`,' a ',`horario_cliente`.`hora_egreso_viernes_semana_1`) AS `VIERNES`,cast((time_to_sec(timediff(`horario_cliente`.`hora_egreso_viernes_semana_1`,`horario_cliente`.`hora_ingreso_viernes_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `viernes_carga`,concat(`horario_cliente`.`hora_ingreso_sabado_semana_1`,' a ',`horario_cliente`.`hora_egreso_sabado_semana_1`) AS `SABADO`,cast((time_to_sec(timediff(`horario_cliente`.`hora_egreso_sabado_semana_1`,`horario_cliente`.`hora_ingreso_sabado_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `sabado_carga`,concat(`horario_cliente`.`hora_ingreso_domingo_semana_1`,' a ',`horario_cliente`.`hora_egreso_domingo_semana_1`) AS `DOMINGO`,cast((time_to_sec(timediff(`horario_cliente`.`hora_egreso_domingo_semana_1`,`horario_cliente`.`hora_ingreso_domingo_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `domingo_carga` from (`cliente` join `horario_cliente` on((`horario_cliente`.`id_cliente` = `cliente`.`id_cliente`))) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `mes_calendario_x_empleado_semana1`
--
DROP TABLE IF EXISTS `mes_calendario_x_empleado_semana1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mes_calendario_x_empleado_semana1`  AS  select `frecuencia_horaria`.`deleted_at` AS `deleted_at`,`frecuencia_horaria`.`asignado` AS `asignado`,`frecuencia_horaria`.`id_frecuencia_horaria` AS `id_frecuencia_horaria`,`cliente`.`nombre` AS `nombre`,`frecuencia_horaria`.`id_empleado` AS `id_empleado`,concat(`frecuencia_horaria`.`hora_ingreso_lunes_semana_1`,' a ',`frecuencia_horaria`.`hora_egreso_lunes_semana_1`) AS `LUNES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_lunes_semana_1`,`frecuencia_horaria`.`hora_ingreso_lunes_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `lunes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_martes_semana_1`,' a ',`frecuencia_horaria`.`hora_egreso_martes_semana_1`) AS `MARTES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_martes_semana_1`,`frecuencia_horaria`.`hora_ingreso_martes_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `martes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_miercoles_semana_1`,' a ',`frecuencia_horaria`.`hora_egreso_miercoles_semana_1`) AS `MIERCOLES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_miercoles_semana_1`,`frecuencia_horaria`.`hora_ingreso_miercoles_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `miercoles_carga`,concat(`frecuencia_horaria`.`hora_ingreso_jueves_semana_1`,' a ',`frecuencia_horaria`.`hora_egreso_jueves_semana_1`) AS `JUEVES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_jueves_semana_1`,`frecuencia_horaria`.`hora_ingreso_jueves_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `jueves_carga`,concat(`frecuencia_horaria`.`hora_ingreso_viernes_semana_1`,' a ',`frecuencia_horaria`.`hora_egreso_viernes_semana_1`) AS `VIERNES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_viernes_semana_1`,`frecuencia_horaria`.`hora_ingreso_viernes_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `viernes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_sabado_semana_1`,' a ',`frecuencia_horaria`.`hora_egreso_sabado_semana_1`) AS `SABADO`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_sabado_semana_1`,`frecuencia_horaria`.`hora_ingreso_sabado_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `sabado_carga`,concat(`frecuencia_horaria`.`hora_ingreso_domingo_semana_1`,' a ',`frecuencia_horaria`.`hora_egreso_domingo_semana_1`) AS `DOMINGO`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_domingo_semana_1`,`frecuencia_horaria`.`hora_ingreso_domingo_semana_1`)) / (60 * 60)) as decimal(10,1)) AS `domingo_carga` from ((`empleado` join `frecuencia_horaria` on((`frecuencia_horaria`.`id_empleado` = `empleado`.`id_empleado`))) join `cliente` on((`frecuencia_horaria`.`id_cliente` = `cliente`.`id_cliente`))) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `mes_calendario_x_empleado_semana2`
--
DROP TABLE IF EXISTS `mes_calendario_x_empleado_semana2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mes_calendario_x_empleado_semana2`  AS  select `frecuencia_horaria`.`deleted_at` AS `deleted_at`,`frecuencia_horaria`.`asignado` AS `asignado`,`frecuencia_horaria`.`id_frecuencia_horaria` AS `id_frecuencia_horaria`,`cliente`.`nombre` AS `nombre`,`frecuencia_horaria`.`id_empleado` AS `id_empleado`,concat(`frecuencia_horaria`.`hora_ingreso_lunes_semana_2`,' a ',`frecuencia_horaria`.`hora_egreso_lunes_semana_2`) AS `LUNES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_lunes_semana_2`,`frecuencia_horaria`.`hora_ingreso_lunes_semana_2`)) / (60 * 60)) as decimal(10,1)) AS `lunes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_martes_semana_2`,' a ',`frecuencia_horaria`.`hora_egreso_martes_semana_2`) AS `MARTES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_martes_semana_2`,`frecuencia_horaria`.`hora_ingreso_martes_semana_2`)) / (60 * 60)) as decimal(10,1)) AS `martes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_miercoles_semana_2`,' a ',`frecuencia_horaria`.`hora_egreso_miercoles_semana_2`) AS `MIERCOLES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_miercoles_semana_2`,`frecuencia_horaria`.`hora_ingreso_miercoles_semana_2`)) / (60 * 60)) as decimal(10,1)) AS `miercoles_carga`,concat(`frecuencia_horaria`.`hora_ingreso_jueves_semana_2`,' a ',`frecuencia_horaria`.`hora_egreso_jueves_semana_2`) AS `JUEVES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_jueves_semana_2`,`frecuencia_horaria`.`hora_ingreso_jueves_semana_2`)) / (60 * 60)) as decimal(10,1)) AS `jueves_carga`,concat(`frecuencia_horaria`.`hora_ingreso_viernes_semana_2`,' a ',`frecuencia_horaria`.`hora_egreso_viernes_semana_2`) AS `VIERNES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_viernes_semana_2`,`frecuencia_horaria`.`hora_ingreso_viernes_semana_2`)) / (60 * 60)) as decimal(10,1)) AS `viernes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_sabado_semana_2`,' a ',`frecuencia_horaria`.`hora_egreso_sabado_semana_2`) AS `SABADO`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_sabado_semana_2`,`frecuencia_horaria`.`hora_ingreso_sabado_semana_2`)) / (60 * 60)) as decimal(10,1)) AS `sabado_carga`,concat(`frecuencia_horaria`.`hora_ingreso_domingo_semana_2`,' a ',`frecuencia_horaria`.`hora_egreso_domingo_semana_2`) AS `DOMINGO`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_domingo_semana_2`,`frecuencia_horaria`.`hora_ingreso_domingo_semana_2`)) / (60 * 60)) as decimal(10,1)) AS `domingo_carga` from ((`empleado` join `frecuencia_horaria` on((`frecuencia_horaria`.`id_empleado` = `empleado`.`id_empleado`))) join `cliente` on((`frecuencia_horaria`.`id_cliente` = `cliente`.`id_cliente`))) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `mes_calendario_x_empleado_semana3`
--
DROP TABLE IF EXISTS `mes_calendario_x_empleado_semana3`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mes_calendario_x_empleado_semana3`  AS  select `frecuencia_horaria`.`deleted_at` AS `deleted_at`,`frecuencia_horaria`.`asignado` AS `asignado`,`frecuencia_horaria`.`id_frecuencia_horaria` AS `id_frecuencia_horaria`,`cliente`.`nombre` AS `nombre`,`frecuencia_horaria`.`id_empleado` AS `id_empleado`,concat(`frecuencia_horaria`.`hora_ingreso_lunes_semana_3`,' a ',`frecuencia_horaria`.`hora_egreso_lunes_semana_3`) AS `LUNES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_lunes_semana_3`,`frecuencia_horaria`.`hora_ingreso_lunes_semana_3`)) / (60 * 60)) as decimal(10,1)) AS `lunes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_martes_semana_3`,' a ',`frecuencia_horaria`.`hora_egreso_martes_semana_3`) AS `MARTES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_martes_semana_3`,`frecuencia_horaria`.`hora_ingreso_martes_semana_3`)) / (60 * 60)) as decimal(10,1)) AS `martes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_miercoles_semana_3`,' a ',`frecuencia_horaria`.`hora_egreso_miercoles_semana_3`) AS `MIERCOLES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_miercoles_semana_3`,`frecuencia_horaria`.`hora_ingreso_miercoles_semana_3`)) / (60 * 60)) as decimal(10,1)) AS `miercoles_carga`,concat(`frecuencia_horaria`.`hora_ingreso_jueves_semana_3`,' a ',`frecuencia_horaria`.`hora_egreso_jueves_semana_3`) AS `JUEVES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_jueves_semana_3`,`frecuencia_horaria`.`hora_ingreso_jueves_semana_3`)) / (60 * 60)) as decimal(10,1)) AS `jueves_carga`,concat(`frecuencia_horaria`.`hora_ingreso_viernes_semana_3`,' a ',`frecuencia_horaria`.`hora_egreso_viernes_semana_3`) AS `VIERNES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_viernes_semana_3`,`frecuencia_horaria`.`hora_ingreso_viernes_semana_3`)) / (60 * 60)) as decimal(10,1)) AS `viernes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_sabado_semana_3`,' a ',`frecuencia_horaria`.`hora_egreso_sabado_semana_3`) AS `SABADO`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_sabado_semana_3`,`frecuencia_horaria`.`hora_ingreso_sabado_semana_3`)) / (60 * 60)) as decimal(10,1)) AS `sabado_carga`,concat(`frecuencia_horaria`.`hora_ingreso_domingo_semana_3`,' a ',`frecuencia_horaria`.`hora_egreso_domingo_semana_3`) AS `DOMINGO`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_domingo_semana_3`,`frecuencia_horaria`.`hora_ingreso_domingo_semana_3`)) / (60 * 60)) as decimal(10,1)) AS `domingo_carga` from ((`empleado` join `frecuencia_horaria` on((`frecuencia_horaria`.`id_empleado` = `empleado`.`id_empleado`))) join `cliente` on((`frecuencia_horaria`.`id_cliente` = `cliente`.`id_cliente`))) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `mes_calendario_x_empleado_semana4`
--
DROP TABLE IF EXISTS `mes_calendario_x_empleado_semana4`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mes_calendario_x_empleado_semana4`  AS  select `frecuencia_horaria`.`deleted_at` AS `deleted_at`,`frecuencia_horaria`.`asignado` AS `asignado`,`frecuencia_horaria`.`id_frecuencia_horaria` AS `id_frecuencia_horaria`,`cliente`.`nombre` AS `nombre`,`frecuencia_horaria`.`id_empleado` AS `id_empleado`,concat(`frecuencia_horaria`.`hora_ingreso_lunes_semana_4`,' a ',`frecuencia_horaria`.`hora_egreso_lunes_semana_4`) AS `LUNES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_lunes_semana_4`,`frecuencia_horaria`.`hora_ingreso_lunes_semana_4`)) / (60 * 60)) as decimal(10,1)) AS `lunes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_martes_semana_4`,' a ',`frecuencia_horaria`.`hora_egreso_martes_semana_4`) AS `MARTES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_martes_semana_4`,`frecuencia_horaria`.`hora_ingreso_martes_semana_4`)) / (60 * 60)) as decimal(10,1)) AS `martes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_miercoles_semana_4`,' a ',`frecuencia_horaria`.`hora_egreso_miercoles_semana_4`) AS `MIERCOLES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_miercoles_semana_4`,`frecuencia_horaria`.`hora_ingreso_miercoles_semana_4`)) / (60 * 60)) as decimal(10,1)) AS `miercoles_carga`,concat(`frecuencia_horaria`.`hora_ingreso_jueves_semana_4`,' a ',`frecuencia_horaria`.`hora_egreso_jueves_semana_4`) AS `JUEVES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_jueves_semana_4`,`frecuencia_horaria`.`hora_ingreso_jueves_semana_4`)) / (60 * 60)) as decimal(10,1)) AS `jueves_carga`,concat(`frecuencia_horaria`.`hora_ingreso_viernes_semana_4`,' a ',`frecuencia_horaria`.`hora_egreso_viernes_semana_4`) AS `VIERNES`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_viernes_semana_4`,`frecuencia_horaria`.`hora_ingreso_viernes_semana_4`)) / (60 * 60)) as decimal(10,1)) AS `viernes_carga`,concat(`frecuencia_horaria`.`hora_ingreso_sabado_semana_4`,' a ',`frecuencia_horaria`.`hora_egreso_sabado_semana_4`) AS `SABADO`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_sabado_semana_4`,`frecuencia_horaria`.`hora_ingreso_sabado_semana_4`)) / (60 * 60)) as decimal(10,1)) AS `sabado_carga`,concat(`frecuencia_horaria`.`hora_ingreso_domingo_semana_4`,' a ',`frecuencia_horaria`.`hora_egreso_domingo_semana_4`) AS `DOMINGO`,cast((time_to_sec(timediff(`frecuencia_horaria`.`hora_egreso_domingo_semana_4`,`frecuencia_horaria`.`hora_ingreso_domingo_semana_4`)) / (60 * 60)) as decimal(10,1)) AS `domingo_carga` from ((`empleado` join `frecuencia_horaria` on((`frecuencia_horaria`.`id_empleado` = `empleado`.`id_empleado`))) join `cliente` on((`frecuencia_horaria`.`id_cliente` = `cliente`.`id_cliente`))) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`),
  ADD KEY `id_localidad` (`id_localidad`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_categoria_iva` (`id_categoria_iva`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`id_empleado`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_tipo_empleado` (`id_tipo_empleado`),
  ADD KEY `id_localidad` (`id_localidad`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id_empresa`),
  ADD KEY `id_localidad` (`id_localidad`),
  ADD KEY `id_servicio` (`id_servicio`),
  ADD KEY `id_categoria_iva` (`id_categoria_iva`);

--
-- Indices de la tabla `frecuencia_horaria`
--
ALTER TABLE `frecuencia_horaria`
  ADD PRIMARY KEY (`id_frecuencia_horaria`),
  ADD KEY `id_usr` (`id_usr`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_empleado` (`id_empleado`),
  ADD KEY `id_horario_cliente` (`id_horario_cliente`);

--
-- Indices de la tabla `horario_cliente`
--
ALTER TABLE `horario_cliente`
  ADD PRIMARY KEY (`id_horario_cliente`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_user` (`id_usr`);

--
-- Indices de la tabla `iva_categoria`
--
ALTER TABLE `iva_categoria`
  ADD PRIMARY KEY (`id_categoria_iva`);

--
-- Indices de la tabla `localidad`
--
ALTER TABLE `localidad`
  ADD PRIMARY KEY (`id_localidad`);

--
-- Indices de la tabla `recordatorio`
--
ALTER TABLE `recordatorio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`id_servicio`);

--
-- Indices de la tabla `tipo_empleado`
--
ALTER TABLE `tipo_empleado`
  ADD PRIMARY KEY (`id_tipo_empleado`),
  ADD KEY `id_usr` (`id_usr`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_empresa` (`id_empresa`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id_empresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `frecuencia_horaria`
--
ALTER TABLE `frecuencia_horaria`
  MODIFY `id_frecuencia_horaria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `horario_cliente`
--
ALTER TABLE `horario_cliente`
  MODIFY `id_horario_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `iva_categoria`
--
ALTER TABLE `iva_categoria`
  MODIFY `id_categoria_iva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `localidad`
--
ALTER TABLE `localidad`
  MODIFY `id_localidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `recordatorio`
--
ALTER TABLE `recordatorio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `servicio`
--
ALTER TABLE `servicio`
  MODIFY `id_servicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_empleado`
--
ALTER TABLE `tipo_empleado`
  MODIFY `id_tipo_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`id_localidad`) REFERENCES `localidad` (`id_localidad`),
  ADD CONSTRAINT `cliente_ibfk_3` FOREIGN KEY (`id_categoria_iva`) REFERENCES `iva_categoria` (`id_categoria_iva`),
  ADD CONSTRAINT `cliente_ibfk_4` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_user`);

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `empleado_ibfk_2` FOREIGN KEY (`id_tipo_empleado`) REFERENCES `tipo_empleado` (`id_tipo_empleado`),
  ADD CONSTRAINT `empleado_ibfk_3` FOREIGN KEY (`id_localidad`) REFERENCES `localidad` (`id_localidad`),
  ADD CONSTRAINT `empleado_ibfk_4` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_user`);

--
-- Filtros para la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`id_localidad`) REFERENCES `localidad` (`id_localidad`),
  ADD CONSTRAINT `empresa_ibfk_2` FOREIGN KEY (`id_servicio`) REFERENCES `servicio` (`id_servicio`),
  ADD CONSTRAINT `empresa_ibfk_3` FOREIGN KEY (`id_categoria_iva`) REFERENCES `iva_categoria` (`id_categoria_iva`);

--
-- Filtros para la tabla `frecuencia_horaria`
--
ALTER TABLE `frecuencia_horaria`
  ADD CONSTRAINT `frecuencia_horaria_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`),
  ADD CONSTRAINT `frecuencia_horaria_ibfk_2` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`id_empleado`),
  ADD CONSTRAINT `frecuencia_horaria_ibfk_4` FOREIGN KEY (`id_horario_cliente`) REFERENCES `horario_cliente` (`id_horario_cliente`),
  ADD CONSTRAINT `frecuencia_horaria_ibfk_5` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_user`);

--
-- Filtros para la tabla `horario_cliente`
--
ALTER TABLE `horario_cliente`
  ADD CONSTRAINT `horario_cliente_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`),
  ADD CONSTRAINT `horario_cliente_ibfk_2` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_user`);

--
-- Filtros para la tabla `recordatorio`
--
ALTER TABLE `recordatorio`
  ADD CONSTRAINT `recordatorio_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_user`);

--
-- Filtros para la tabla `tipo_empleado`
--
ALTER TABLE `tipo_empleado`
  ADD CONSTRAINT `tipo_empleado_ibfk_1` FOREIGN KEY (`id_usr`) REFERENCES `usuario` (`id_user`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id_empresa`),
  ADD CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
