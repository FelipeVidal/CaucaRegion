using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace CaucaRegion.Models
{
    public partial class CaucaRegionBDContext : DbContext
    {
        public CaucaRegionBDContext()
        {
        }

        public CaucaRegionBDContext(DbContextOptions<CaucaRegionBDContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Evento> Eventos { get; set; }
        public virtual DbSet<MusicaAgrupacione> MusicaAgrupaciones { get; set; }
        public virtual DbSet<Plato> Platos { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data source=FELIPE; Initial Catalog=CaucaRegionBD; user id=dbSw3; password=oracle;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Evento>(entity =>
            {
                entity.HasKey(e => e.EventosId)
                    .HasName("EVENTOS_PK");

                entity.ToTable("EVENTOS");

                entity.Property(e => e.EventosId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("EVENTOS_ID");

                entity.Property(e => e.Entrada).HasColumnName("ENTRADA");

                entity.Property(e => e.Imagen)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("IMAGEN");

                entity.Property(e => e.Lugar)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("LUGAR");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE");
            });

            modelBuilder.Entity<MusicaAgrupacione>(entity =>
            {
                entity.HasKey(e => e.MusicaId)
                    .HasName("MUSIC_PK");

                entity.ToTable("MUSICA_AGRUPACIONES");

                entity.Property(e => e.MusicaId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("MUSICA_ID");

                entity.Property(e => e.Canal)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("CANAL");

                entity.Property(e => e.Imagen)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("IMAGEN");

                entity.Property(e => e.Instrumentos)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("INSTRUMENTOS");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE");
            });

            modelBuilder.Entity<Plato>(entity =>
            {
                entity.HasKey(e => e.PlatosId)
                    .HasName("PLATOS_PK");

                entity.ToTable("PLATOS");

                entity.Property(e => e.PlatosId)
                    .HasColumnType("numeric(18, 0)")
                    .HasColumnName("PLATOS_ID");

                entity.Property(e => e.Imagen)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("IMAGEN");

                entity.Property(e => e.Ingredientes)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("INGREDIENTES");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("NOMBRE");

                entity.Property(e => e.Precio).HasColumnName("PRECIO");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.Usuario1)
                    .HasName("USUARIO_PK");

                entity.ToTable("USUARIOS");

                entity.Property(e => e.Usuario1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("USUARIO");

                entity.Property(e => e.Contrasenia)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("CONTRASENIA");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
