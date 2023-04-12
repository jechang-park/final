package com.kh.yagiyo.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Data
public class Base {
  @CreationTimestamp
  @Column(updatable = false)
  private LocalDateTime createdTime;

  @UpdateTimestamp
  @Column(insertable = false)
  private LocalDateTime updatedTime;
}
